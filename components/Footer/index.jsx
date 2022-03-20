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
                  <img loading="lazy" src="images/allLogo.png" alt="" />
                  <div className={styles["footer_social_mobile"]}>
                     <img loading="lazy" src="images/iconFacebookYellow.png" alt="" />
                     <img loading="lazy" src="images/iconInstYellow.png" alt="" />
                     <img loading="lazy" src="images/iconTelegramYellow.png" alt="" />
                  </div>
                  <span>Privacy Police</span>
                  <span>© 2022 | Mercy Chain</span>
               </div>
            </div>
            <div className={styles["footer_under"]}>
               <h1>{trans("footer_join")}</h1>
               <a href="https://www.instagram.com/mercy_chain">
                  <img loading="lazy" src="images/iconInstYellow.png" alt="" />
               </a>
               <a href="https://www.facebook.com/Mercy-Chain-108789655101913/">
                  <img loading="lazy" src="images/iconFacebookYellow.png" alt="" />
               </a>
               <a href="">
                  <img loading="lazy" src="images/iconTelegramYellow.png" alt="" />
               </a>
            </div>
         </div>
      </div>
   )
}

export default Footer