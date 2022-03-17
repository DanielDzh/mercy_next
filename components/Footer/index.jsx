import React from 'react'
import styles from './Footer.module.scss';
import { useTrans } from '../../hooks/useTrans';

const Footer = () => {

   const { trans } = useTrans();

   return (
      <div id="Footer">
         <div className={styles["footer_container"]}>
            <div className={styles["footer_upper"]}>
               <div className={styles["footer_logo"]}>
                  <img src="images/allLogo.png" alt="" />
                  <div className={styles["footer_social_mobile"]}>
                     <img src="images/iconFacebookYellow.png" alt="" />
                     <img src="images/iconInstYellow.png" alt="" />
                     <img src="images/iconTelegramYellow.png" alt="" />
                  </div>
                  <span>Privacy Police</span>
                  <span>© 2022 | Mercy Chain</span>
               </div>
            </div>
            <div className={styles["footer_under"]}>
               <h1>{trans("footer_join")}</h1>
               <img src="images/iconInstYellow.png" alt="" />
               <img src="images/iconFacebookYellow.png" alt="" />
               <img src="images/iconTelegramYellow.png" alt="" />
            </div>
         </div>
      </div>
   )
}

export default Footer