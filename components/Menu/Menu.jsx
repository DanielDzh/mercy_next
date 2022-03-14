import React from 'react'
import styles from './Menu.module.scss'
import { useEffect } from 'react'


const Menu = ({ active, setActive }) => {

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

   return (
      <div className={active ? styles["menu_active"] : styles["menu"]} >
         <div className={styles["blur"]} onClick={() => setActive(false)}></div>
         <div className="menu__content">

         </div>
      </div>
   )
}

export default Menu
