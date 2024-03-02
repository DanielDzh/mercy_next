import React from "react";

import styles from "./SampleNextArrow.module.scss";

export const SampleNextArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        cursor: 'pointer',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '40%',
        bottom: '0%',
        width: '42px',
        height: '42px',
        padding: '12px',
        borderRadius: '50px',
        backgroundColor: 'unset',
        opacity: .5
      }}
      onClick={onClick}
    >
      <img loading="lazy" className={styles.arrow} src={"images/icons/next.png"} alt="" />
    </div>
  );
};
