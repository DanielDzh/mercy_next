import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import styles from "./Swift.module.scss";
import { useClipboard } from 'use-clipboard-copy';

const IBAN_EUR = 'UA383052990000026000000123098';
const SWIFT_EUR = "PBANUA2X";
const SWIFT_2_EUR = "COBADEFF";
const SWIFT_3_EUR = "CHASDEFX";
const SCORE_1_EUR = "400886700401";
const SCORE_2_EUR = "6231605145";

const CODE_USD = "UA903052990000026009040128827";
const SWIFT_1_USD = "PBANUA2X";
const SWIFT_2_USD = "CHASUS33";
const SWIFT_3_USD = "IRVT US 3N";
const SWIFT_4_USD = "CITI US 33";
const SCORE_1_USD = "001-1-000080";
const SCORE_2_USD = "890-0085-754";
const SCORE_3_USD = "36445343";


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
   const clipboardIBAN_EUR = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSWIFT_EUR = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSWIFT_2_EUR = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSWIFT_3_EUR = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSCORE_1_EUR = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSCORE_2_EUR = useClipboard({
      copiedTimeout: 1500,
   });

   const clipboardCODE_USD = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSWIFT_1_USD = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSWIFT_2_USD = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSWIFT_3_USD = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSCORE_1_USD = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSCORE_2_USD = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSCORE_3_USD = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSWIFT_4_USD = useClipboard({
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
            <p className={styles.fat}>Рахунок в ЄВРО:</p>
            <p style={{ marginBottom: '20px' }} >
               Назва підприємства/company Name: <br/>
               CHARITY ORGANIZATION «CHARITY FOUNDATION «MERCY CHAIN»<br/>
               CO «CF «MERCY CHAIN»<br/>
               <br/>
               IBAN Code: <br/>
               <button onClick={clipboardIBAN_EUR.copy}>{clipboardIBAN_EUR.copied ? 'Copied' : <span>UA383052990000026000000123098</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardIBAN_EUR.target} value={IBAN_EUR} type="hidden" />
               <br/>
               Назва банку/Name of the bank: <br/>
               JSC CB &quot;PRIVATBANK&quot;, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE,<br/> 
               <br/>
               SWIFT code банку/Bank SWIFT Code: <br/>
               <button onClick={clipboardSWIFT_EUR.copy}>{clipboardSWIFT_EUR.copied ? 'Copied' : <span>PBANUA2X</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSWIFT_EUR.target} value={SWIFT_EUR} type="hidden" />
               Адреса підприємства/Company address: <br/>
               AVENUE NAUKI 18, APARTMENT 21, KYIV, 03039, UKRAINE<br/>
               <br/>
               Банки кореспонденти/Correspondent banks, <br/>
               Рахунок у банку-кореспонденті/Account in the correspondent bank: <br/>
               <button onClick={clipboardSCORE_1_EUR.copy}>{clipboardSCORE_1_EUR.copied ? 'Copied' : <span>400886700401</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSCORE_1_EUR.target} value={SCORE_1_EUR} type="hidden" />
               <br/>
               SWIFT Code банку-кореспондента/SWIFT Code of the correspondent bank: <br/>
               <button onClick={clipboardSWIFT_2_EUR.copy}>{clipboardSWIFT_2_EUR.copied ? 'Copied' : <span>COBADEFF</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSWIFT_2_EUR.target} value={SWIFT_2_EUR} type="hidden" />
               <br/>
               Банк-кореспондент/Correspondent bank: <br/>
               Commerzbank AG, Frankfurt am Main, Germany; <br/>
               <br/>
               або <br/>
               <br/>
               Рахунок у банку-кореспонденті/Account in the correspondent bank: <br/>
               <button onClick={clipboardSCORE_2_EUR.copy}>{clipboardSCORE_2_EUR.copied ? 'Copied' : <span>6231605145</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSCORE_2_EUR.target} value={SCORE_2_EUR} type="hidden" />
               SWIFT Code банку-кореспондента/SWIFT Code of the correspondent bank: <br/>
               <button onClick={clipboardSWIFT_3_EUR.copy}>{clipboardSWIFT_3_EUR.copied ? 'Copied' : <span>CHASDEFX</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSWIFT_3_EUR.target} value={SWIFT_3_EUR} type="hidden" />
               Банк-кореспондент/Correspondent bank: <br/>
               J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY<br/>
               <br/>
               Призначення платежу: англійською мовою<br/>
               «Безповоротна благодійна фінансова допомога…..»<br/>
               <br/>
               Purpose of payment: in English<br/>
               &quot;Irrevocable charitable financial assistance...&quot;<br/>
            </p>
            <div style={{height: '1px', width: '100%', background: 'rgb(193 193 193)'}}></div>
             <p style={{ marginTop: '20px' }} className={styles.fat}>Рахунок в доларах США</p>
            <p>
               Реквізити підприємства/Company details Назва підприємства/company Name <br/>
               CHARITY ORGANIZATION «CHARITY FOUNDATION «MERCY CHAIN»<br/>
               CO «CF «MERCY CHAIN»<br/>
               <br/>
               Code <br/>
               <button onClick={clipboardCODE_USD.copy}>{clipboardCODE_USD.copied ? 'Copied' : <span>UA903052990000026009040128827</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardCODE_USD.target} value={CODE_USD} type="hidden" />
               <br/>
               Назва банку/Name of the bank <br/>
               JSC CB &quot;PRIVATBANK&quot;, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE <br/>
               <br/>
               SWIFT code банку/Bank SWIFT Code <br/>
               <button onClick={clipboardSWIFT_1_USD.copy}>{clipboardSWIFT_1_USD.copied ? 'Copied' : <span>PBANUA2X</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSWIFT_1_USD.target} value={SWIFT_1_USD} type="hidden" />
               <br/>
               Адреса підприємства/Company address <br/>
               AVENUE NAUKI 18, APARTMENT 21, KYIV, 03039, UKRAINE<br/>
               <br/>
               Банки кореспонденти/Correspondent banks<br/>
               <br/>
               Рахунок у банку-кореспонденті/Account in the correspondent bank <br/>
               <button onClick={clipboardSCORE_1_USD.copy}>{clipboardSCORE_1_USD.copied ? 'Copied' : <span>001-1-000080</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSCORE_1_USD.target} value={SCORE_1_USD} type="hidden" />
               SWIFT Code банку-кореспондента/SWIFT Code of the correspondent bank <br/>
               <button onClick={clipboardSWIFT_2_USD.copy}>{clipboardSWIFT_2_USD.copied ? 'Copied' : <span>CHASUS33</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSWIFT_2_USD.target} value={SWIFT_2_USD} type="hidden" />
               Банк-кореспондент/Correspondent bank <br/>
               JP Morgan Chase Bank, New York ,USA <br/>
               <br/>
               Рахунок у банку-кореспонденті/Account in the correspondent bank <br/>
               <button onClick={clipboardSCORE_2_USD.copy}>{clipboardSCORE_2_USD.copied ? 'Copied' : <span>890-0085-754</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSCORE_2_USD.target} value={SCORE_2_USD} type="hidden" />
               SWIFT Code банку-кореспондента/SWIFT Code of the correspondent bank <br/>
               <button onClick={clipboardSWIFT_3_USD.copy}>{clipboardSWIFT_3_USD.copied ? 'Copied' : <span>IRVT US 3N</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSWIFT_3_USD.target} value={SWIFT_3_USD} type="hidden" />
               Банк-кореспондент/Correspondent bank <br/>
               The Bank of New York Mellon, New York, USA <br/>
               <br/>
               Рахунок у банку-кореспонденті/Account in the correspondent bank <br/>
               <button onClick={clipboardSCORE_3_USD.copy}>{clipboardSCORE_3_USD.copied ? 'Copied' : <span>36445343</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSCORE_3_USD.target} value={SCORE_3_USD} type="hidden" />
               SWIFT Code банку-кореспондента/SWIFT Code of the correspondent bank <br/>
               <button onClick={clipboardSWIFT_4_USD.copy}>{clipboardSWIFT_4_USD.copied ? 'Copied' : <span>CITI US 33</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSWIFT_4_USD.target} value={SWIFT_4_USD} type="hidden" />
               Банк-кореспондент/Correspondent bank <br/>
               Citibank N.A., NEW YORK, USA <br/>
               <br/>
               Призначення платежу: англійською мовою<br/>
               «Безповоротна благодійна фінансова допомога…..»<br/>
               <br/>
               Purpose of payment: in English<br/>
               &quot;Irrevocable charitable financial assistance...&quot;<br/>
            </p>
         </div>
      </>
   );
}
