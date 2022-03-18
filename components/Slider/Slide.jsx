import React from "react";
import styles from "./Slider.module.scss";

const Slide = ({ src }) => {
  return (
    <div
      className={`${styles["slide-item"]} ${styles["container_back_photo"]}`}
    >
      <div className={styles["wrapp_back_photo"]}>
        <div className={styles["under_back_photo"]}></div>
        <img loading="lazy" className={styles["back_photo"]} src={src} alt="" />
      </div>
    </div>
  );
};

export default Slide;
