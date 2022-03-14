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
          to="currentProjects"
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
          to=""
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
          to="becomePartner"
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
          to="ourTeam"
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
          to=""
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
        <Language />

        {/* <div className={styles["burger"]} >
          <div className={menuActive ? styles["header_burger_active"] : styles["header_burger"]} onClick={() => setMenuActive(!menuActive)}>
          </div>
          <Menu active={menuActive} setActive={setMenuActive} />

        </div> */}
      </div>
    </div>
  );
}
