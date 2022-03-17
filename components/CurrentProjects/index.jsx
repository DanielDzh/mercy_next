import React from "react";
import styles from "./CurrentProjects.module.scss";
import saveLife from "../../public/images/saveLife.png";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlue from "../ButtonBlue";
import photo1 from "../../public/images/project1.png";
import photo2 from "../../public/images/project2.png";
import Warning from "../Warning";
import { useTrans } from "../../hooks/useTrans";

export default function CurrentProjects() {

  const { trans } = useTrans();

  const projects = [
    {
      name: "",
      desc: "",
      gallery: ["images/project1.png", "images/project1.png"],
    },
  ];
  return (
    <div id='currentProjects'>
      <div className={styles["currentProject_container"]}>
        <h1 className={styles["currentProject_title"]}>{trans("current_proj_title")}</h1>
        <div className={styles["block-projects"]}>
          <div className={styles["background"]}>
            <img src={projects[0].gallery[0]} alt="" />
            <img src={projects[0].gallery[1]} alt="" />
          </div>
          <div className={styles["projects-content"]}>
            <h1>{trans("current_proj_desc_title")}</h1>
            <h2>
              <span>{trans("current_proj_desc_1")}</span>{trans("current_proj_desc_2")}
            </h2>
            <p>
              {trans("current_proj_desc_3")}
            </p>

            <div className={styles["button-projects"]}>
              <ButtonBlueBorder title={trans("current_proj_button_border")} />
              <ButtonBlue title={trans("current_proj_button")} />
            </div>
          </div>
        </div>

        <Warning
          color="#FF0000"
          text={trans("warning")}
        />
      </div>
    </div>
  );
}
