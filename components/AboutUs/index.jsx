import React from "react";
import SectionTitle from "../SectionTitle";
import CustomList from "../CustomList";
import styles from "./AboutUs.module.scss";
import ButtonBlue from "../ButtonBlue";

export default function AboutUs() {
  return (
    <div id="aboutUs">
      <div className={styles["aboutUs-container"]}>
        <div className={styles["aboutUs-img"]}>
          <img src="images/we.png" alt="" loading="lazy" />
        </div>
        <div className={styles["aboutUs-info"]}>
          <SectionTitle
            title="ХТО МИ"
            desc="Головне завдання благодійного фонду “UNFAILING CHARITY” — забезпечити допомогу та матеріальну підтримку найбільш потребуючого населення потребуючих країн. 
                    Саме зараз фонд працює над вирішенням проблем українського населення, постраждалого від війни, і сфокусований на 4 основних напрямках діяльності:"
          />
          <CustomList />
          <p>
            Приєднуйся до нас: твоя пожертва може стати якраз тією «останньою
            краплею», якої не вистачає, щоб завівся мотор нашої вантажівки з
            продуктами в Європі, і вирушити в сторону українського кордону, щоб
            продовжити життя незахищених українців.
          </p>
          <ButtonBlue title="Допомогти зараз" />
        </div>
      </div>
      {/* <div className={styles["row">
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="dead civilians" start={0} end={2000} duration={5} />
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="dead soldiers" start={0} end={200} duration={100} />
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Design Items" start={0} end={769} duration={100} />
                        <SingleCountdown title="Clients Served" start={0} end={124} duration={100} />
                    </div> */}
    </div>
  );
}
