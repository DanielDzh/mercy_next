import React from "react";
import styles from "./PopupWithTitle.module.scss";
import { Popup } from "../Popup";

export default function PopupWithTitle({ open, onClose, children, title }) {
  return (
    <Popup open={open} onClose={onClose} fullHeight noPadding>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.body}>{children}</div>
    </Popup>
  );
}
