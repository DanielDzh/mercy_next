import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import styles from "./Swift.module.scss";
import { useClipboard } from 'use-clipboard-copy';

const NAME = 'lovenské združenie 9';
const ACCOUNTNUMBER = "8311546446";
const SWIFT = "CMFGUS33";
const ADRESS = '19 W 24th Street New York NY 10010 United States';

export default function Swift({ disabled, onClick }) {
   const { trans } = useTrans();

   const [active, setActive] = useState(false);

   const handleClick = useCallback(
      (e) => {
         e.preventDefault();
         return onClick && onClick();
      },
      [onClick]
   );
   const clipboardNAME = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardACCOUNTNUMBER = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSWIFT = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardADRESS = useClipboard({
      copiedTimeout: 1500,
   });

   return (
      <>
         <button
            className={generateClasses(
               styles.accordionSwift,
               active ? styles.active : ""
            )}
            onClick={() => setActive(!active)}
         >
            SWIFT
            {active ? <img className={styles.imgArrow} src="images/icons/arrowTop.png" /> : <img className={styles.imgArrow} src="images/icons/arrowDown.png" />}
         </button>

         <div className={generateClasses(styles.panelSwift, active ? styles.activePanel : "")}>
            <p className={styles.fat}>Name:</p>
            <p style={{ marginBottom: '10px' }} >
               <input ref={clipboardNAME.target} value={NAME} type="hidden" />
               <button onClick={clipboardNAME.copy}>{clipboardNAME.copied ? 'Copied' : <span>lovenské združenie 9</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>Account Number: </p>
            <p style={{ marginBottom: '10px' }} >
               <input ref={clipboardACCOUNTNUMBER.target} value={ACCOUNTNUMBER} type="hidden" />
               <button onClick={clipboardACCOUNTNUMBER.copy}>{clipboardACCOUNTNUMBER.copied ? 'Copied' : <span>8311546446</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>SWIFT code банку/Bank SWIFT Code:</p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardSWIFT.target} value={SWIFT} type="hidden" />
               <button onClick={clipboardSWIFT.copy}>{clipboardSWIFT.copied ? 'Copied' : 'CMFGUS33'} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>Adress:</p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardADRESS.target} value={ADRESS} type="hidden" />
               <button onClick={clipboardADRESS.copy}>
                  {clipboardADRESS.copied ? 'Copied' : '19 W 24th Street New York NY 10010 United States'}
                  <img className={styles.imgCopy} src="images/icons/copy.png" />
               </button>
            </p>

         </div>
      </>
   );
}
