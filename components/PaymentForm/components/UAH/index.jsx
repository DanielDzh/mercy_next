import React, { useCallback, useState } from "react";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import styles from "./UAH.module.scss";
import { useClipboard } from 'use-clipboard-copy';

const CODE = '44979212';
const SCORE = "UA243052990000026001030129102";


export default function UAH({ disabled, onClick }) {
   const { trans } = useTrans();

   const [active, setActive] = useState(false);

   const handleClick = useCallback(
      (e) => {
         e.preventDefault();
         return onClick && onClick();
      },
      [onClick]
   );
   const clipboardCODE = useClipboard({
      copiedTimeout: 1500,
   });
   const clipboardSCORE = useClipboard({
      copiedTimeout: 1500,
   });

   return (
      <>
         <button
            className={generateClasses(
               styles.accordionUAH,
               active ? styles.active : ""
            )}
            onClick={() => setActive(!active)}
         >
            UAH
            {active ? <img className={styles.imgArrow} src="images/icons/arrowTop.png" /> : <img className={styles.imgArrow} src="images/icons/arrowDown.png" />}
         </button>

         <div className={generateClasses(styles.panelUAH, active ? styles.activePanel : "")}>
            <p className={styles.fat}>Рахунок в гривні:</p>
            <p style={{ margin: '5px 0 20px' }} >
               Найменування отримувача<br/>
               БО «БФ «МЕРСІ ЧЕЙН»<br/>
               <br/>
               Код одержувача<br/>
               <button onClick={clipboardCODE.copy}>{clipboardCODE.copied ? 'Copied' : <span>44979212</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardCODE.target} value={CODE} type="hidden" />
               <br/>
               Рахунок отримувача у форматі відповідно до стандарту IBAN<br/>
               <button onClick={clipboardSCORE.copy}>{clipboardSCORE.copied ? 'Copied' : <span>UA243052990000026001030129102</span>} <img className={styles.imgCopy} src="images/icons/copy.png" /> </button>
               <input ref={clipboardSCORE.target} value={SCORE} type="hidden" />
               <br/>
               Призначення платежу: англійською мовою<br/>
               «Безповоротна благодійна фінансова допомога…..»<br/>
            </p>
         </div>
      </>
   );
}
