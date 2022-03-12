import React from 'react'
import styles from './Footer.module.scss';

const Footer = () => {
   return (
      <div id="Footer">
         <div className={styles["footer_container"]}>
            <div className={styles["footer_upper"]}>
               <div className={styles["footer_logo"]}>
                  <img src="images/allLogo.png" alt="" />
               </div>
            </div>
            <div className={styles["footer_under"]}>
               <div>
                  <span>Legal Documents</span>
                  <span>Terms of Use</span>
                  <span>Privacy Police</span>
                  <span>AML Policy</span>
                  <span>Site Map</span>
               </div>
               <span>© Coin Update | Krypto & Bitcoin News</span>
            </div>
         </div>
      </div>
   )
}

export default Footer