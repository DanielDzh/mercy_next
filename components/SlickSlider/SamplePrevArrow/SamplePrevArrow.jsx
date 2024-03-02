import React from "react";

import styles from "./SamplePrevArrow.module.scss";

export const SamplePrevArrow = (props) => {
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
        left: '40%',
        bottom: '0%',
        width: '42px',
        height: '42px',
        padding: '12px',
        borderRadius: '50px',
        backgroundColor: 'unset',
        opacity: .5,
        zIndex: 2
      }}
      onClick={onClick}
    >
      <img loading="lazy" className={styles.arrow} src={"images/icons/back.png"} alt="" />
    </div>
  );
};
