import React from "react";
import styles from "./Details.module.scss";
import { useTrans } from "../../hooks/useTrans";
import { useClipboard } from 'use-clipboard-copy';


const PayPal = 'Alexey.zigmar@gmail.com'
const Privat = '5363 5423 0844 9322'

export default function Details() {

   const { trans } = useTrans();

   const clipboardPayPal = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardPrivat = useClipboard({
      copiedTimeout: 1500,
   });

   return (
      <div id="details">
         <div className={styles["details_container"]}>
            <div className={styles["details_title_wrapper"]}>
               <h1 className={styles["details_title"]}>
                  <span>{trans("details_title_1")}</span>
                  <span>{trans("details_title_2")}</span>
               </h1>
               <p>{trans("details_title_p")}</p>
               <h2>{trans("details_title_h2")}</h2>
            </div>
            <div className={styles["details_blocks"]}>
               <div className={styles["details_block"]}>
                  <img src="images/paypal.png" alt="" />
                  <div className={styles["details_paypal_block_text"]}>
                     <h2>
                        PayPal
                     </h2>
                     <p onClick={clipboardPayPal.copy}>
                        <input ref={clipboardPayPal.target} value={PayPal} type="hidden" />
                        {clipboardPayPal.copied ? 'Copied' : 'Alexey.zigmar@gmail.com'} <img src="images/icons/copy.png" />
                     </p>
                  </div>
               </div>
               <div className={styles["details_block"]}>
                  <img className={styles["details_block_img"]} src="images/privat.png" alt="" />
                  <div className={styles["details_paypal_block_text"]}>
                     <h2>
                        ПриватБанк (OLEKSII DERKACH)
                     </h2>
                     <p onClick={clipboardPrivat.copy}>
                        <input ref={clipboardPrivat.target} value={Privat} type="hidden" />
                        {clipboardPrivat.copied ? 'Copied' : '5363 5423 0844 9322'} <img src="images/icons/copy.png" />
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
}
