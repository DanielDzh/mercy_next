import React from 'react';
import { Link } from 'react-scroll';
import styles from './ButtonBlueBorder.module.scss';

export default function ButtonBlueBorder({ title, click, detailPopup, setDetailPopup }) {
  return (
    <div className={styles['hero-button']} onClick={click}>
      <div className={styles['button-blue-border']}>
        {title}
      </div>
    </div>
  );
}
