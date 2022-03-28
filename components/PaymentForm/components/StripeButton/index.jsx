import Image from "next/image";
import React, { useCallback, useState } from "react";
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
      {/* <span className={styles.label}>{trans("pay-with")}</span> */}
      {/* <div className={styles.stripeicon}>
        <Image
          src="/images/stripe.png"
          width={40}
          height={40}
          alt="stripe logo"
        />
      </div> */}
      <div className={styles.paymentIcons}>
        <div className={styles.paymentIcon}>
          <Image
            src="/images/icons/applePay.png"
            width={32}
            height={30}
            alt="applePay logo"
          />
        </div>
        <div className={styles.paymentIcon}>
          <Image
            src="/images/icons/visa.png"
            width={30}
            height={27}
            alt="visa logo"
          />
        </div>
        <div className={styles.paymentIcon}>
          <Image
            src="/images/icons/mastercard.png"
            width={35}
            height={20}
            alt="mastercard logo"
          />
        </div>
      </div>
    </button>
  );
}
