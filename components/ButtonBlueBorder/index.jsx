import React from 'react';
import styles from './ButtonBlueBorder.module.scss';
import cn from "classnames";

export default function ButtonBlueBorder({ title, click, className }) {
  return (
    <div className={cn(styles['hero-button'], className)} onClick={click}>
      <div className={styles['button-blue-border']}>
        {title}
      </div>
    </div>
  );
}
