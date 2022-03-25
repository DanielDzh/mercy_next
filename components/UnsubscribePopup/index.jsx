import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useTrans } from "../../hooks/useTrans";
import { Api } from "../../services/api";
import ButtonBlue from "../ButtonBlue";
import { ErrorBase } from "../common/Error";
import Input from "../common/Input";
import PopupWithTitle from "../common/PopupWithTitle";
import styles from "./UnsubscribePopup.module.scss";

export const UNSUBSCRIBE = "unsubscribe";

export default function UnsubscribePopup({ open, onClose }) {
  const { trans } = useTrans();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const handleUnsubscribe = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);
      return Api.post("/stipe/unsubscribe", { email })
        .then((res) => {
          if (res.success) return setSuccess(true);
          if (res.message) return setError(res.message);
        })
        .finally(() => setLoading(false));
    },
    [email]
  );

  return (
    <PopupWithTitle title={trans("unsubscribe")} onClose={onClose} open={open}>
      {success ? (
        <div className={styles.wrapper}>
          <Image
            src="/images/Vector.png"
            width={60}
            height={60}
            layout="fixed"
            alt="check"
          />
          <h3 className={styles.successTitle}>
            {trans("subscription-cancelled")}
          </h3>
        </div>
      ) : (
        <form className={styles.wrapper} onSubmit={handleUnsubscribe}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            adorment={trans("email")}
            align="right"
            placeholder="jon.doe@email.com"
          />
          <div className={styles.information}>
            {trans("stripe-unsubscribe-hint")}
          </div>
          <ButtonBlue
            className={styles.btn}
            title={trans("continue")}
            click={handleUnsubscribe}
            type="submit"
            loading={loading}
          />
          <ErrorBase value={error} />
        </form>
      )}
    </PopupWithTitle>
  );
}
