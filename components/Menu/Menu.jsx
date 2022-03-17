import React from 'react'
import styles from './Menu.module.scss'
import { useEffect } from 'react'
import { Link } from "react-scroll";
import { useTrans } from "../../hooks/useTrans";
import Language from '../Language';

const Menu = ({ active, setActive }) => {

   const { trans } = useTrans();

   // const allNav = [
   //    {
   //       name: t("nav_menu.about"),
   //       url: "About"
   //    },
   //    {
   //       name: t("nav_menu.specification"),
   //       url: "Specifications"
   //    },
   //    {
   //       name: t("nav_menu.previous_projects"),
   //       url: "PreviousProjects"
   //    },
   //    {
   //       name: t("nav_menu.services"),
   //       url: "Services"
   //    },
   //    {
   //       name: t("nav_menu.ongoing_projects"),
   //       url: "OngoingProjects"
   //    },
   //    {
   //       name: t("nav_menu.contacts"),
   //       url: "Contacts"
   //    }
   // ]

   // useEffect(() => {
   //    let body = document.querySelector('body');
   //    let menuList = document.querySelector('.menu');

   //    if (active) {
   //       body.classList.add('lock');
   //       menuList.classList.add('unLock');
   //    } else {
   //       body.classList.remove('lock');
   //       menuList.classList.remove('unLock');
   //    }
   // }, [active])

   useEffect(() => {
      // const body = document.querySelector("body");
      // document.body.classList.add("home");
      if (active) {
         document.body.style = "overflow: hidden;"
         // menuList.classList.add('unLock');
      } else {
         document.body.style = "overflow: auto;"
         // menuList.classList.remove('unLock')
      }
   }, [active]);

   return (
      <div className={active ? `${styles.menu} ${styles.active}` : styles["menu"]} >
         <div className={styles["blur"]} onClick={() => setActive(false)}></div>
         <div className={styles["menu_content"]}>
            <Link
               className={styles["header_link"]}
               to="aboutUs"
               smooth={true}
               duration={2000}
               activeClass="active"
               spy={false}
               offset={5}
               onClick={() => setActive(false)}
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
               onClick={() => setActive(false)}
            >
               {trans`header_project`}
            </Link>

            <Link
               className={styles["header_link"]}
               to="becomePartner"
               smooth={true}
               duration={2000}
               activeClass="active"
               spy={false}
               offset={5}
               onClick={() => setActive(false)}
            >
               {trans('header_join')}
            </Link>
            <Link
               className={styles["header_link"]}
               to="Reviews"
               smooth={true}
               duration={2000}
               activeClass="active"
               spy={false}
               offset={5}
               onClick={() => setActive(false)}
            >
               {trans('header_reviews')}
            </Link>
            <Link
               className={styles["header_link"]}
               to="ourTeam"
               smooth={true}
               duration={2000}
               activeClass="active"
               spy={false}
               offset={5}
               onClick={() => setActive(false)}
            >
               {trans('header_team')}
            </Link>
            <Link
               className={styles["header_link"]}
               to="ourPartners"
               smooth={true}
               duration={2000}
               activeClass="active"
               spy={false}
               offset={5}
               onClick={() => setActive(false)}
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
               onClick={() => setActive(false)}
            >
               {trans('header_contactUs')}
            </Link>
            <div className={styles["lang"]}>
               <a href="https://www.instagram.com/mercy_chain">
                  <img src="images/iconInstYellow.png" alt="" />
               </a>
               <a href="">
                  <img src="images/iconFacebookYellow.png" alt="" />
               </a>
               <a href="">
                  <img src="images/iconTelegramYellow.png" alt="" />
               </a>
            </div>
            <Language />


         </div>
      </div>
   )
}

export default Menu
