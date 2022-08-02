import React, { useEffect } from "react";
import { generateClasses } from "../../../utils/generateClassName";
import styles from "./Popup.module.scss";

export const Popup = ({ className,children, open, onClose, fullHeight, noPadding }) => {
  useEffect(() => {
    if (open) document.body.style = "overflow: hidden;";
    if (!open) document.body.style = "overflow: auto;";
  }, [open]);

  return open ? (
    <div
      className={styles.wrapper}
      onClick={(e) =>
        e.target.className === styles.wrapper ? onClose() : null
      }
    >
      <div onClick={() => onClose}
        className={generateClasses(
          styles.popup,
          className,
          open ? styles.opened : styles.closed,
          fullHeight ? styles.fullHeight : ""
        )}
        id="click"
      >
        <div className={styles["wrapper_back"]} style={{ marginBottom: 0 }}/>

        <div
          className={generateClasses(
            styles.content,
            noPadding ? styles.noPadding : ""
          )}
        >
          {children}
        </div>
      </div>
    </div>
  ) : null;
};
