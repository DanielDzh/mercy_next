import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Language from '../Language';
import styles from './Header.module.scss';
import { useTrans } from '../../hooks/useTrans';

export default function Header() {
  const { trans } = useTrans();

  return (
    <div id={styles["header"]}>
      <div className={styles["header_container"]}>
        <Link
          className={styles['header_link']}
          to="aboutUs"
          smooth={true}
          duration={2000}
          activeClass="active"
          spy={false}
          offset={5}
        >
          {/* {t('header.navbar.portfolio')} */}
          About Us
        </Link>
        <Link
          className={styles['header_link']}
          to="currentProjects"
          smooth={true}
          duration={2000}
          activeClass="active"
          spy={false}
          offset={5}
        >
          {/* {t('header.navbar.portfolio')} */}
          Projects
        </Link>
        <Link
          className={styles['header_link']}
          to=""
          smooth={true}
          duration={2000}
          activeClass="active"
          spy={false}
          offset={5}
        >
          {/* {t('header.navbar.portfolio')} */}
          Reviews
        </Link>
        <Link
          className={styles['header_link']}
          to="becomePartner"
          smooth={true}
          duration={2000}
          activeClass="active"
          spy={false}
          offset={5}
        >
          {/* {t('header.navbar.portfolio')} */}
          join
        </Link>
        <Link
          className={styles['header_link']}
          to="ourTeam"
          smooth={true}
          duration={2000}
          activeClass="active"
          spy={false}
          offset={5}
        >
          {/* {t('header.navbar.portfolio')} */}
          team
        </Link>
        <Link
          className={styles['header_link']}
          to=""
          smooth={true}
          duration={2000}
          activeClass="active"
          spy={false}
          offset={5}
        >
          {/* {t('header.navbar.portfolio')} */}
          partners
        </Link>
        <Link
          className={styles['header_link']}
          to="contactUs"
          smooth={true}
          duration={2000}
          activeClass="active"
          spy={false}
          offset={5}
        >
          {/* {t('header.navbar.portfolio')} */}
          contact us
        </Link>
      </div>
    </div>
  );
}
