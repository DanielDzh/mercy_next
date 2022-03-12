import React, { useEffect } from "react";
import { generateClasses } from "../../../utils/generateClassName";
import styles from "./Popup.module.scss";

export const Popup = ({ children, open, onClose, fullHeight, noPadding }) => {
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
      <div
        className={generateClasses(
          styles.popup,
          open ? styles.opened : styles.closed,
          fullHeight ? styles.fullHeight : ""
        )}
        id="click"
      >
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
