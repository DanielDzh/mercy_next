import React from "react";
import { Link } from "react-scroll";
import { generateClasses } from "../../utils/generateClassName";
import styles from "./ButtonBlue.module.scss";

export default function ButtonBlue({
  title,
  click,
  className,
  loading,
  ...rest
}) {
  return (
    <div
      className={generateClasses(styles.heroButton, className)}
      onClick={click}
    >
      <div
        className={generateClasses(
          styles.buttonBlue,
          loading ? styles.loading : ""
        )}
        {...rest}
      >
        {title}
      </div>
    </div>
  );
}
