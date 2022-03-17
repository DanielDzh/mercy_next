import React from 'react';
import { Link } from 'react-scroll';
import styles from './ButtonYellow.module.scss';

export default function ButtonYellow({ title, click }) {
  return (
    <div
      // to="contact"
      onClick={click}
      className={styles['button-yellow']}
    // smooth={true}
    // duration={2000}
    // activeClass="active"
    // spy={false}
    // offset={5}
    >
      {title}
    </div>
  );
}
