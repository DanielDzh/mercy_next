import React from "react";
import styles from "./BecomePartner.module.scss";
import ButtonBlue from "../ButtonBlue";
import ButtonYellow from "../ButtonYellow";
import { useTrans } from "../../hooks/useTrans";

export default function BecomePartner() {

  const { trans } = useTrans();

  return (
    <div id='becomePartner'>
      <div className={styles["becomePartner_container"]}>
        <div className={styles["becomePartner_wrapper"]}>
          <div className={styles["becomePartner_image"]}>
            <img src="images/becomePartner.png" alt="" />
          </div>
          <div className={styles["becomePartner_block"]}>
            <div className={styles["becomePartner_title"]}>
              <h1>{trans("become_part_1")}</h1>
              <h1>{trans("become_part_2")}</h1>
            </div>
            <h2>{trans("become_part_subtitle")}</h2>
            <div className={styles["cards"]}>
              <div className={styles["once_help"]}>
                <h2>{trans("one_assise_title")}</h2>
                <div className={styles["once_help_text"]}>
                  <span>
                    {trans("one_assise_desc")}
                  </span>
                  <ButtonBlue title={trans("button_help")} />
                </div>
              </div>
              <div className={styles["regular_help"]}>
                <h2>{trans("regul_assis_title")}</h2>
                <div className={styles["regular_help_text"]}>
                  <span>
                    {trans("regul_assis_desc")}
                  </span>
                  <ButtonYellow title={trans("button_subscribe")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
