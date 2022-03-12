import React from "react";
import styles from "./SaveLife.module.scss";
import saveLife from "../../public/images/saveLife.png";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlue from "../ButtonBlue";

export default function SaveLife() {
  return (
    <div id={styles.saveLife}>
      <div className={styles["saveLife-container"]}>
        <div className={styles["block-save"]}>
          <div className={styles.background}>
            <img src="images/saveLife.png" alt="" />
            <div></div>
          </div>
          <div className={styles["save-content"]}>
            <h1>ВРЯТУЙ</h1>
            <h1>ЖИТТЯ</h1>
            <h2>
              потребуючих українців — підтримай фінансово і поділись цією
              інформацією з друзями!
            </h2>
            <div className={styles["button-save"]}>
              <ButtonBlueBorder title="Поширити" />
              <ButtonBlue title="Допомогти" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
