import React from "react";
import { useTrans } from "../../hooks/useTrans";
import styles from "./CustomList.module.scss";



const Point = ({ title }) => (
  <li className={styles.point}>
    <span>
      <img src="images/Vector.png" alt="" />
    </span>
    {title}
  </li>
);

export default function CustomList() {
  const { trans } = useTrans();
  const needsList = [
    trans("aboutUs_list_1"),
    trans("aboutUs_list_2"),
    trans("aboutUs_list_3"),
    trans("aboutUs_list_4"),
  ];


  return (
    <div className={styles.customList}>
      <ul className={styles.list}>
        {needsList.map((item) => (
          <Point title={item} key={item} />
        ))}
      </ul>
    </div>
  );
}
