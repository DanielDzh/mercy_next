import React from 'react';
import styles from './Warning.module.scss';
import warning from '../../public/images/warning.png';

const Warning = ({ color, text }) => {
  return (
    <div className={styles.warning}>
      <img src={warning} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default Warning;
