import React from 'react';
import { Link } from 'react-scroll';
import styles from './ButtonBlueBorder.module.scss';

export default function ButtonBlueBorder({ title }) {
  return (
    <div className={styles['hero-button']}>
      <Link
        to="contact"
        className={styles['button-blue-border']}
        smooth={true}
        duration={2000}
        activeClass="active"
        spy={false}
        offset={5}
      >
        {title}
      </Link>
    </div>
  );
}
