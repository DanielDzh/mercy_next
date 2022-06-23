import React, { useState } from "react";
import { Link } from "react-scroll";
import Language from "../Language/index";
import styles from "./Header.module.scss";
import { useTrans } from "../../hooks/useTrans";
import Menu from "../Menu/Menu";

export default function Header() {
  const { trans } = useTrans();
  const [menuActive, setMenuActive] = useState(false);


  return (
    <div id={styles["header"]}>
      <div className={styles["header_container"]}>
        <div className={styles["logo"]}>
          <img src="images/allLogo.png" alt="" />
        </div>
        <div className={styles["header_links"]}>
          <Link
            className={styles["header_link"]}
            to="aboutUs"
            smooth={true}
            duration={2000}
            activeClass="active"
            spy={false}
            offset={5}
          >
            {trans("header_aboutUs")}
          </Link>
          <Link
            className={styles["header_link"]}
            to="minutiae"
            smooth={true}
            duration={2000}
            activeClass="active"
            spy={false}
            offset={5}
          >
            {trans`header_project`}
          </Link>
          <Link
            className={styles["header_link"]}
            to="levels"
            smooth={true}
            duration={2000}
            activeClass="active"
            spy={false}
            offset={5}
          >
            {trans('header_join')}
          </Link>
          <Link
            className={styles["header_link"]}
            to="cost"
            smooth={true}
            duration={2000}
            activeClass="active"
            spy={false}
            offset={5}
          >
            {trans('header_reviews')}
          </Link>
          <Link
            className={styles["header_link"]}
            to="reviews"
            smooth={true}
            duration={2000}
            activeClass="active"
            spy={false}
            offset={5}
          >
            {trans('header_team')}
          </Link>
          <Link
            className={styles["header_link"]}
            to="details"
            smooth={true}
            duration={2000}
            activeClass="active"
            spy={false}
            offset={5}
          >
            {trans('header_partners')}
          </Link>
          <Link
            className={styles["header_link"]}
            to="contactUs"
            smooth={true}
            duration={2000}
            activeClass="active"
            spy={false}
            offset={5}
          >
            {trans('header_contactUs')}
          </Link>
        </div>
        <div className={styles["lang"]}>
          <a href="https://www.instagram.com/mercy_chain">
            <img loading="lazy" src="images/iconInstYellow.png" alt="" className={styles["lang_desc_img"]} />
          </a>
          <a href="https://www.facebook.com/Mercy-Chain-108789655101913/">
            <img loading="lazy" src="images/iconFacebookYellow.png" alt="" className={styles["lang_desc_img"]} />
          </a>
          <span></span>
          <Language />
        </div>
        <div className={styles["mobile_lang"]}>
          <Language />
        </div>
        <div className={styles["burger"]} >
          <div className={menuActive ? `${styles.header_burger} ${styles.active}` : styles["header_burger"]} onClick={() => setMenuActive(!menuActive)}>
            <span></span>
          </div>
          <Menu active={menuActive} setActive={setMenuActive} />

        </div>
      </div>
    </div>
  );
}
