import React from "react";
import styles from "./SectionTitle.module.scss";
import { useTrans } from "../../hooks/useTrans";

export default function SectionTitle(props) {


  const { title, subTitle, desc } = props;
  return (
    <div className={styles["section-title"]}>
      <h3 className={styles["section-name"]}>{title}</h3>
      <h2>{subTitle}</h2>
      <p className={styles.s}>{desc}</p>
    </div>
  );
}
