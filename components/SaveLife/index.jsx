import React from "react";
import styles from "./SaveLife.module.scss";
import saveLife from "../../public/images/saveLife.png";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";
import PaymentForm from "../PaymentForm";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";

export default function SaveLife() {

  const { open, onOpen, onClose } = useOpenHandlers(false);

  const { trans } = useTrans()
  return (
    <>
      <PaymentForm open={open} onClose={onClose} />
      <div id={styles.saveLife}>
        <div className={styles["saveLife-container"]}>
          <div className={styles["block-save"]}>
            <div className={styles.background}>
              <img src="images/saveLife.png" alt="" />
              <div></div>
            </div>
            <div className={styles["save-content"]}>
              <div className={styles["mobile_flex"]}>
                <h1>{trans("save_life_title_1")}</h1>
                <h1>{trans("save_life_title_2")}</h1>
              </div>
              <h2>
                {trans("save_life_desc")}
              </h2>
              <div className={styles["button-save"]}>
                <ButtonBlueBorder title={trans("save_life_button_border")} />
                <ButtonBlue title={trans("save_life_button")} click={onOpen} />
              </div>
            </div>
          </div>
          <div className={styles["button-save-mobile"]}>
            <ButtonBlueBorder title={trans("save_life_button_border")} />
            <ButtonBlue title={trans("save_life_button")} click={onOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
