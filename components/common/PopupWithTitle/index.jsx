import React from "react";
import styles from "./PopupWithTitle.module.scss";
import { Popup } from "../Popup";

export default function PopupWithTitle({ className,open, onClose, children, title, background = "#10a6f9", color = "#fff", }) {
  return (
    <Popup className={className} open={open} onClose={onClose} fullHeight noPadding>
      <div className={styles.header} style={{ background: background }}>
        <h2 className={styles.h2} style={{ color: color }}>{title}</h2>
        <div className={styles["popup_close"]} onClick={() => onClose()} style={{ width: 'auto' }}>
          {color === "#fff" ?
            <img loading="lazy" src={"images/icons/cancel.png"} alt="" />
            :
            <img loading="lazy" src={"images/icons/cancelBlack.png"} alt="" />
          }
        </div>
      </div>
      <div className={styles.body} style={{ paddingTop: color === "#fff" ? '3vw' : '0' }}>{children}</div>
    </Popup>
  );
}
