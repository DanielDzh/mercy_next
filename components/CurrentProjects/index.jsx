import React from "react";
import styles from "./CurrentProjects.module.scss";
import saveLife from "../../public/images/saveLife.png";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlue from "../ButtonBlue";
import photo1 from "../../public/images/project1.png";
import photo2 from "../../public/images/project2.png";
import Warning from "../Warning";

export default function CurrentProjects() {
  const projects = [
    {
      name: "",
      desc: "",
      gallery: ["images/project1.png", "images/project2.png"],
    },
  ];
  return (
    <div id='currentProjects'>
      <div className={styles["currentProject_container"]}>
        <h1 className={styles["currentProject_title"]}>ДІЮЧІ ПРОЕКТИ</h1>
        <div className={styles["block-projects"]}>
          <div className={styles["background"]}>
            <img src={projects[0].gallery[0]} alt="" />
            <img src={projects[0].gallery[1]} alt="" />
          </div>
          <div className={styles["projects-content"]}>
            <h1>ДОПОМОЖИ</h1>
            <h2>
              <span>незахищеним українцям</span>, які страждають від нападу
              російських окупантів
            </h2>
            <p>
              Ми взяли на себе відповідальність забезпечувати базові потреби
              тисячі постраждалих людей у «гарячих точках» Київської області
              кожні 6 днів.
            </p>
            <div className={styles["button-projects"]}>
              <ButtonBlueBorder title="Детальніше" />
              <ButtonBlue title="Галерея" />
            </div>
          </div>
        </div>

        <Warning
          color="#FF0000"
          text="УВАГА! Зібрані кошти витрачаються тільки на матеріальну допомогу населенню «гарячих точок»: 
               продукти, одяг і медикаменти. 
               Логістику і функціонування команди фонд покриває за власний кошт засновників."
        />
      </div>
    </div>
  );
}
