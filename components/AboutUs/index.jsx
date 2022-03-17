import React from "react";
import SectionTitle from "../SectionTitle";
import CustomList from "../CustomList";
import styles from "./AboutUs.module.scss";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";
import PaymentForm from "../PaymentForm";

export default function AboutUs() {

  const { open, onOpen, onClose } = useOpenHandlers(false);

  const { trans } = useTrans();

  return (
    <>
      <PaymentForm open={open} onClose={onClose} />
      <div id="aboutUs">
        <div className={styles["aboutUs-container"]}>
          <div className={styles["aboutUs-img"]}>
            <img src="images/we.png" alt="" loading="lazy" className={styles["aboutUs-img-img"]} />
            <div className={styles["aboutUs_desc_tablet"]}>
              <SectionTitle
                title={trans("aboutUs_title")}
                desc={trans("aboutUs_desc_under_title")}
              />
              <CustomList />
            </div>
          </div>
          <div className={styles["aboutUs-info"]}>
            <div className={styles["aboutUs_desc_desktop"]}>
              <SectionTitle
                title={trans("aboutUs_title")}
                desc={trans("aboutUs_desc_under_title")}
              />
              <CustomList />
            </div>
            <img src="images/we_mobile.png" alt="" loading="lazy" className={styles["aboutUs-img-mobile"]} />
            <p>
              {trans("aboutUs_desc_under")}
            </p>
            <div className={styles["aboutUs-buttons"]}>
              <ButtonBlue title={trans("aboutUs_button")} click={onOpen} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
