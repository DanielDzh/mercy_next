import React from 'react';
import { Link } from 'react-scroll';
import styles from './ButtonBlue.module.scss';

export default function ButtonBlue({ title, click }) {
  return (
    <div className={styles['hero-button']} onClick={click}>
      <div
        // to="contact"
        className={styles['button-blue']}
        // smooth={true}
        // duration={2000}
        // activeClass="active"
        // spy={false}
        // offset={5}
      >
        {title}
      </div>
    </div>
  );
}
