import React from "react";
import { Trans } from "react-i18next";
import { useTrans } from "../../../../hooks/useTrans";
import ButtonBlue from "../../../ButtonBlue";
import styles from "../../PaymentForm.module.scss";

export default function PaymentSuccess({ onClose }) {
  const { trans } = useTrans();
  return (
    <>
      <h3 className={styles.h3}>{trans("thank-you-for-help")}</h3>
      <div className={styles.quote}>
        <div className={styles.base}>{trans("verse")}</div>
        <div className={styles.origin}>{trans("verse-link")}</div>
      </div>
      {/* <ButtonBlue
        className={styles.btn}
        title={trans("close")}
        click={onClose}
      /> */}
    </>
  );
}
