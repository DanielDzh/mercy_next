import React from "react";
import styles from "./PopupWithTitle.module.scss";
import { Popup } from "../Popup";

export default function PopupWithTitle({ open, onClose, children, title }) {
  return (
    <Popup open={open} onClose={onClose} fullHeight noPadding>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div className={styles["popup_close"]} onClick={() => onClose()}>
          <img loading="lazy" src="images/icons/cancel.png" alt="" />
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </Popup>
  );
}
