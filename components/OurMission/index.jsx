import React from "react";
import styles from "./OurMission.module.scss";
import { useTrans } from "../../hooks/useTrans";

export default function OurMission() {
  const { trans } = useTrans();
  return (
    <div id={styles.ourMission}>
      <div className={styles["ourMission-container"]}>
        <div className={styles["first-two-block"]}>
          <div className={styles["ourMission-block"]}>
            <img src="images/ourMissionImage.png" alt="" />
            <div className={styles.ourMissionText}>
              <div className={styles.ourMissionTitle}>{trans("our_mission")}</div>
              <div className={styles.ourMissionDesc}>
                {trans("our_mission_desc")}
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
              {trans("poem")}
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
              <div className={styles["ourAimTitle"]}>{trans("our_goil")}</div>
              <div className={styles["ourAimDesc"]}>{trans("our_goil_desc")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
