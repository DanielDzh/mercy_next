import React from "react";
import styles from "./OurValues.module.scss";
import head from "../../public/images/head.png";
import hands from "../../public/images/hands.png";
import documents from "../../public/images/documents.png";

export default function OurValues() {
  return (
    <div id={styles.ourValues}>
      <div className={styles["ourValues-container"]}>
        <div className={styles["ourValuesTitle"]}>
          <h1>Наші цінності:</h1>
        </div>
        <div className={styles["ourValues-blocks"]}>
          <div className={styles["block1"]}>
            <div className={styles["desc"]}>
              <img src="images/head.png" alt="" />
              <h2>Довіра</h2>
            </div>
            <p>
              Це основа міцних стосунків із партнерами, без якої наше
              функціонування неможливе. Чесність, відкритість та підзвітність
              дозволяють формувати довірчі стосунки та ефективно творити добро
              разом.
            </p>
          </div>
          <div className={styles["block2"]}>
            <div className={styles["desc"]}>
              <img src="images/hands.png" alt="" />
              <h2>Партнерство</h2>
            </div>
            <p>
              Ми віримо, що разом ми зможемо значно більше, ніж кожен окремо.
              Наша співпраця будується на християнських цінностях: взаємоповазі,
              довірі, порядності, залученості та підтримці.
            </p>
          </div>
          <div className={styles["block3"]}>
            <div className={styles["desc"]}>
              <img src="images/documents.png" alt="" />
              <h2>Підзвітність</h2>
            </div>
            <p>
              Ми орієнтовані на прозорість, публічність та підзвітність. Кожен
              проєкт проходить ретельну перевірку. Кожен партнер отримує доступ
              до документів та регулярних звітів про нашу діяльність.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
