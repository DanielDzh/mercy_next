import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import styles from "./Details.module.scss";
import { useClipboard } from 'use-clipboard-copy';

const IBAN = "UA693052990000026002023608888";
const SWIFT = "PBANUA2X";
const ADRESS = 'JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE';

export default function StripeButton({ disabled, onClick }) {
   const { trans } = useTrans();

   const [active, setActive] = useState(false);

   const handleClick = useCallback(
      (e) => {
         e.preventDefault();
         return onClick && onClick();
      },
      [onClick]
   );
   const clipboardIBAN = useClipboard({
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
               styles.accordion,
               active && styles.active
            )}
            onClick={() => setActive(!active)}
         >
            Реквізити
            {active ? <img className={styles.imgArrow} src="images/icons/arrowTop.png" /> : <img className={styles.imgArrow} src="images/icons/arrowDown.png" />}
         </button>

         <div className={generateClasses(styles.panel, active && styles.activePanel)}>
            <p className={styles.fat}>IBAN Code:</p>
            <p style={{ marginBottom: '10px' }} >
               <input ref={clipboardIBAN.target} value={IBAN} type="hidden" />
               <button onClick={clipboardIBAN.copy}>{clipboardIBAN.copied ? 'Copied' : <span style={{ display: 'flex', flexWrap: 'wrap' }}><span>UA693052990000</span><span>026002023608888</span></span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>SWIFT code банку/Bank SWIFT Code</p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardSWIFT.target} value={SWIFT} type="hidden" />
               <button onClick={clipboardSWIFT.copy}>{clipboardSWIFT.copied ? 'Copied' : 'PBANUA2X'} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
            </p>
            <p className={styles.fat}>Adress</p>
            <p style={{ marginBottom: '10px' }}>
               <input ref={clipboardADRESS.target} value={ADRESS} type="hidden" />
               <button onClick={clipboardADRESS.copy}>
                  {clipboardADRESS.copied ? 'Copied' : 'JSC CB &quot;PRIVATBANK&quot;, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE'}
                  <img className={styles.imgCopy} src="images/icons/copy.png" />
               </button>
            </p>

         </div>
      </>
   );
}
