import React from "react";
import styles from "./OurValues.module.scss";
import head from "../../public/images/head.png";
import hands from "../../public/images/hands.png";
import documents from "../../public/images/documents.png";
import { useTrans } from "../../hooks/useTrans";

export default function OurValues() {

  const { trans } = useTrans();

  return (
    <div id={styles.ourValues}>
      <div className={styles["ourValues-container"]}>
        <div className={styles["ourValuesTitle"]}>
          <h1>{trans("our_value_title")}</h1>
        </div>
        <div className={styles["ourValues-blocks"]}>
          <div className={styles["block1"]}>
            <div className={styles["desc"]}>
              <img src="images/head.png" alt="" />
              <h2>{trans("our_value_trust")}</h2>
            </div>
            <p>
              {trans("our_value_trust_desc")}
            </p>
          </div>
          <div className={styles["block2"]}>
            <div className={styles["desc"]}>
              <img src="images/hands.png" alt="" />
              <h2>{trans("our_value_partnership")}</h2>
            </div>
            <p>
              {trans("our_value_partnership_desc")}
            </p>
          </div>
          <div className={styles["block3"]}>
            <div className={styles["desc"]}>
              <img src="images/documents.png" alt="" />
              <h2>{trans("our_value_accountability")}</h2>
            </div>
            <p>
              {trans("our_value_accountability_desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
