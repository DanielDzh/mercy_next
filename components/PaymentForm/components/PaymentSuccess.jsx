import React from "react";
import ButtonBlue from "../../ButtonBlue";
import styles from "../PaymentForm.module.scss";

export default function PaymentSuccess({ onClose }) {
  return (
    <>
      <h3 className={styles.h3}>Дякуємо за допомогу!</h3>
      <div className={styles.quote}>
        <div className={styles.base}>
          Ніхто не може двом панам служити: бо або одного зненавидить, а другого
          буде любити, або триматиметься одного, а того знехтує. Не можете
          Богові служити і мамоні.
        </div>
        <div className={styles.origin}>Матвія 6:24</div>
      </div>
      <ButtonBlue className={styles.btn} title="Закрити" click={onClose} />
    </>
  );
}
