import Image from "next/image";
import React, { useCallback } from "react";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import styles from "./StripeButton.module.scss";

export default function StripeButton({ disabled, onClick }) {
  const { trans } = useTrans();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      return onClick && onClick();
    },
    [onClick]
  );
  
  return (
    <button
      className={generateClasses(
        styles.stripeButton,
        disabled ? styles.disabled : ""
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      <span className={styles.label}>{trans("pay-with")}</span>
      <Image
        src="/images/stripe.png"
        width={40}
        height={40}
        alt="stripe logo"
      />
    </button>
  );
}
