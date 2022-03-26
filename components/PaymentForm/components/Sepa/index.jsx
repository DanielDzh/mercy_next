import React, { useCallback, useState } from "react";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import styles from "./Sepa.module.scss";
import { useClipboard } from 'use-clipboard-copy';

const NAME = "Slovenské združenie 9";
const BIC = "TRWIBEB1XXX";
const IBAN = "BE40 9672 7900 1163";
const ADRESS = 'Avenue Louise 54, Room S52 Brussels 1050 Belgium';

export default function Sepa({ disabled, onClick }) {
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
   const clipboardBIC = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardIBAN = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardADRESS = useClipboard({
      copiedTimeout: 1500,
   });

   return (
      <>
         <button
            className={generateClasses(
               styles.accordionSepa,
               active ? styles.active : ""
            )}
            onClick={() => setActive(!active)}
         >
            SEPA
            {active ? <img className={styles.imgArrow} src="images/icons/arrowTop.png" /> : <img className={styles.imgArrow} src="images/icons/arrowDown.png" />}
         </button>

         <div className={generateClasses(styles.panelSepa, active ? styles.activePanel : "")}>
            <p className={styles.fat}>Account holder name:</p>
            <p style={{ marginBottom: '10px' }} >
               <input ref={clipboardNAME.target} value={NAME} type="hidden" />
               <button onClick={clipboardNAME.copy}>{clipboardNAME.copied ? 'Copied' : <span>Slovenské združenie 9</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>BIC код:</p>
            <p style={{ marginBottom: '10px' }} >
               <input ref={clipboardBIC.target} value={BIC} type="hidden" />
               <button onClick={clipboardBIC.copy}>{clipboardBIC.copied ? 'Copied' : <span>TRWIBEB1XXX</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>IBAN:</p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardIBAN.target} value={IBAN} type="hidden" />
               <button onClick={clipboardIBAN.copy}>{clipboardIBAN.copied ? 'Copied' : 'BE40 9672 7900 1163'} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>Adress: </p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardADRESS.target} value={ADRESS} type="hidden" />
               <button onClick={clipboardADRESS.copy}>
                  {clipboardADRESS.copied ? 'Copied' : "Avenue Louise 54, Room S52 Brussels 1050 Belgium"}
                  <img className={styles.imgCopy} src="images/icons/copy.png" />
               </button>
            </p>

         </div>
      </>
   );
}
