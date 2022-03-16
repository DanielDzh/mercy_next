import React from 'react';
import { Link } from 'react-scroll';
import styles from './ButtonBlueBorder.module.scss';

export default function ButtonBlueBorder({ title }) {
  return (
    <div className={styles['hero-button']}>
      <div className={styles['button-blue-border']}>
        {title}
      </div>
    </div>
  );
}
