import React from "react";
import { generateClasses } from "../../utils/generateClassName";
import styles from "./Error.module.scss";

export const ErrorBase = ({ value, children, className = "" }) => {
  return value || children ? (
    <span className={generateClasses(styles.error, className)}>
      {value || children}
    </span>
  ) : null;
};
