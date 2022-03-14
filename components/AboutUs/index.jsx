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
          <img src="images/we.png" alt="" loading="lazy" className={styles["aboutUs-img-img"]} />
          <div className={styles["aboutUs_desc_tablet"]}>
            <SectionTitle
              title="ХТО МИ"
              desc="Головне завдання благодійного фонду “MERCY CHAIN” — забезпечити допомогу та матеріальну підтримку найбільш потребуючого населення потребуючих країн. 
                    Саме зараз фонд працює над вирішенням проблем українського населення, постраждалого від війни, і сфокусований на 4 основних напрямках діяльності:"
            />
            <CustomList />
          </div>
        </div>
        <div className={styles["aboutUs-info"]}>
          <div className={styles["aboutUs_desc_desktop"]}>
            <SectionTitle
              title="ХТО МИ"
              desc="Головне завдання благодійного фонду “MERCY CHAIN” — забезпечити допомогу та матеріальну підтримку найбільш потребуючого населення потребуючих країн. 
                    Саме зараз фонд працює над вирішенням проблем українського населення, постраждалого від війни, і сфокусований на 4 основних напрямках діяльності:"
            />
            <CustomList />
          </div>
          <img src="images/we.png" alt="" loading="lazy" className={styles["aboutUs-img-mobile"]} />
          <p>
            Приєднуйся до нас: твоя пожертва може стати якраз тією «останньою
            краплею», якої не вистачає, щоб завівся мотор нашої вантажівки з
            продуктами в Європі, і вирушити в сторону українського кордону, щоб
            продовжити життя незахищених українців.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonBlue title="Допомогти зараз" />
          </div>
        </div>
      </div>
    </div>
  );
}
