import React from "react";
import { generateClasses } from "../../../utils/generateClassName";
import styles from "./Input.module.scss";

export default function Input({
  value,
  onChange,
  placeholder,
  adorment,
  align = "left",
}) {
  return (
    <div className={styles.inputBase}>
      {adorment ? (
        <div className={generateClasses(styles.adorment, "no-select")}>
          {adorment}
        </div>
      ) : null}
      <input
        className={generateClasses(
          styles.input,
          adorment ? styles.withAdorment : ""
        )}
        style={{ textAlign: align }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
