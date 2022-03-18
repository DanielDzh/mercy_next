import React from 'react';
import styles from './Warning.module.scss';

const Warning = ({ color, text }) => {
  return (
    <div className={styles.warning}>
      <img loading="lazy" src='images/warning.png' alt="" />
      <span>{text}</span>
    </div>
  );
};

export default Warning;
