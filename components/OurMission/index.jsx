import React from "react";
import styles from "./OurMission.module.scss";

export default function OurMission() {
  return (
    <div id={styles.ourMission}>
      <div className={styles["ourMission-container"]}>
        <div className={styles["first-two-block"]}>
          <div className={styles["ourMission-block"]}>
            <img src="images/ourMissionImage.png" alt="" />
            <div className={styles.ourMissionText}>
              <div className={styles.ourMissionTitle}>Наша місія:</div>
              <div className={styles.ourMissionDesc}>
                прославлення <span>Ісуса Христа</span> через допомогу
                потребуючим.
              </div>
            </div>
          </div>
          {/* style={{ background: `url(${vector6}) no-repeat left` }} */}
          <div className={styles["poem-block"]}>
            {/* <img src={vector6} alt="" className='imageYellow' /> */}
            <img
              src="images/imageBible.png"
              alt=""
              className={styles["imageBible"]}
            />
            <span className={styles["triangle-right"]}></span>
            <div className={styles["ourPoemText"]}>
              «Отак ваше світло нехай світить перед людьми, щоб вони бачили ваші
              добрі діла, та прославляли Oтця вашого, що на небі» Від Матвія
              5:16
            </div>
          </div>
        </div>
        <div className={styles["second-block"]}>
          <div className={styles["outAim"]}>
            <img
              src="images/ourAim.png"
              alt=""
              className={styles["imageYellow"]}
            />
            <div className={styles["ourAimText"]}>
              <div className={styles["ourAimTitle"]}>Наша мета: </div>
              <div className={styles["ourAimDesc"]}>
                забезпечення матеріальної допомоги та підтримки найбільш
                потребуючого населення України.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
