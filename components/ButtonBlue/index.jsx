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
      className={generateClasses(
        styles.buttonBlue, className,
        loading ? styles.loading : ""
      )}
      onClick={click}
      {...rest}
    >
      {title}
    </div>
  );
}
