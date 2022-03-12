import React from "react";
import styles from "./CustomList.module.scss";

const needsList = [
  "нагодувати голодних",
  "одягнути замерзлих",
  "забезпечити хворих медикаментами",
  "матеріальна допомога і доставка необхідної продукції людям, які  знаходяться в «гарячих точках»",
];

const Point = ({ title }) => (
  <li className={styles.point}>
    <span>
      <img src="images/Vector.png" alt="" />
    </span>
    {title}
  </li>
);

export default function CustomList() {
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
