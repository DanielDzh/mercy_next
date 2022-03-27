import React, { useCallback, useState } from "react";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import styles from "./Ach.module.scss";
import { useClipboard } from 'use-clipboard-copy';

const NAME = "Slovenske zdruzenie 9";
const ROUTINGNUMBER = "084009519";
const ACCOUNTNUMBER = "9600003303286602";
const ACCOUNTTYPE = "checking";
const ADRESS = '19 W 24th Street New York NY 10010 United States';

export default function Ach({ disabled, onClick }) {
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
   const clipboardROUTINGNUMBER = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardACCOUNTNUMBER = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardACCOUNTTYPE = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardADRESS = useClipboard({
      copiedTimeout: 1500,
   });

   return (
      <>
         <button
            className={generateClasses(
               styles.accordion,
               active && styles.active
            )}
            onClick={() => setActive(!active)}
         >
            ACH
            {active ? <img className={styles.imgArrow} src="images/icons/arrowTop.png" /> : <img className={styles.imgArrow} src="images/icons/arrowDown.png" />}
         </button>

         <div className={generateClasses(styles.panel, active && styles.activePanel)}>
            <p className={styles.fat}>Account holder name:</p>
            <p style={{ marginBottom: '10px' }} >
               <input ref={clipboardNAME.target} value={NAME} type="hidden" />
               <button onClick={clipboardNAME.copy}>{clipboardNAME.copied ? 'Copied' : <span>Slovenske zdruzenie 9</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>Routing Number: </p>
            <p style={{ marginBottom: '10px' }} >
               <input ref={clipboardROUTINGNUMBER.target} value={ROUTINGNUMBER} type="hidden" />
               <button onClick={clipboardROUTINGNUMBER.copy}>{clipboardROUTINGNUMBER.copied ? 'Copied' : <span>084009519</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>Account Number:</p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardACCOUNTNUMBER.target} value={ACCOUNTNUMBER} type="hidden" />
               <button onClick={clipboardACCOUNTNUMBER.copy}>{clipboardACCOUNTNUMBER.copied ? 'Copied' : '9600003303286602'} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>Account Type:</p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardACCOUNTTYPE.target} value={ACCOUNTTYPE} type="hidden" />
               <button onClick={clipboardACCOUNTTYPE.copy}>{clipboardACCOUNTTYPE.copied ? 'Copied' : 'checking'} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>Adress: </p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardADRESS.target} value={ADRESS} type="hidden" />
               <button onClick={clipboardADRESS.copy}>
                  {clipboardADRESS.copied ? 'Copied' : "19 W 24th Street New York NY 10010 United States"}
                  <img className={styles.imgCopy} src="images/icons/copy.png" />
               </button>
            </p>

         </div>
      </>
   );
}
