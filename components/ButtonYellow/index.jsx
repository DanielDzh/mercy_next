import React from 'react';
import { Link } from 'react-scroll';
import styles from './ButtonYellow.module.scss';

export default function ButtonYellow({ title, click }) {
  return (
    <div className={styles['hero-button']} onClick={click}>
      <div
        // to="contact"
        className={styles['button-yellow']}
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
