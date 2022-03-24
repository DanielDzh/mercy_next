import Image from "next/image";
import React, { useCallback } from "react";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import styles from "./CryptoButton.module.scss";

export default function CryptoButton({ disabled, onClick }) {
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
        src="/images/bitcoin.png"
        width={25}
        height={25}
        alt="bitcoin logo"
      />
    </button>
  );
}
