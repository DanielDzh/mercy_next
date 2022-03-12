import React from "react";
import styles from "./BecomePartner.module.scss";
import ButtonBlue from "../ButtonBlue";
import ButtonYellow from "../ButtonYellow";

export default function BecomePartner() {
  return (
    <div id={styles.becomePartner}>
      <div className={styles["becomePartner_container"]}>
        <div className={styles["becomePartner_wrapper"]}>
          <div className={styles["becomePartner_image"]}>
            <img src="images/becomePartner.png" alt="" />
          </div>
          <div className={styles["becomePartner_block"]}>
            <div className={styles["becomePartner_title"]}>
              <h1>СТАНЬ</h1>
              <h1>ПАРТНЕРОМ</h1>
            </div>
            <h2>Допомагай з нами людям, які цього справді потребують!</h2>
            <div className={styles["cards"]}>
              <div className={styles["once_help"]}>
                <h2>РАЗОВА ДОПОМОГА</h2>
                <div className={styles["once_help_text"]}>
                  <span>
                    Ваша фінансова допомога продовжує життя незахищеного
                    українського населення в «гарячих точок»!
                  </span>
                  <ButtonBlue title="Допомогти" />
                </div>
              </div>
              <div className={styles["regular_help"]}>
                <h2>РЕГУЛЯРНА ДОПОМОГА</h2>
                <div className={styles["regular_help_text"]}>
                  <span>
                    Саме **Регулярна допомога** дозволяє тисячам українців
                    отримувати допомогу вчасно, зберігаючи їхні життя якомога
                    довше, а нам — планувати допомогу на місяці наперед.
                  </span>
                  <ButtonYellow title="Оформити підписку" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
