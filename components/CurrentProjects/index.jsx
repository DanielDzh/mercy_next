import React from "react";
import styles from "./CurrentProjects.module.scss";
import saveLife from "../../public/images/saveLife.png";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlue from "../ButtonBlue";
import photo1 from "../../public/images/project1.png";
import photo2 from "../../public/images/project2.png";
import Warning from "../Warning";
import { useTrans } from "../../hooks/useTrans";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";
import PopupWithTitle from "../common/PopupWithTitle";
import { Popup } from "../common/Popup";

export default function CurrentProjects() {

  const { open, onOpen, onClose } = useOpenHandlers(false);

  const { trans } = useTrans();

  const projects = [
    {
      name: "",
      desc: "",
      gallery: ["images/project1.png", "images/project1.png"],
      allGallery: [
        "images/Project1/1.png",
        "images/Project1/2.png",
        "images/Project1/3.png",
        "images/Project1/4.png",
        "images/Project1/5.png",
        "images/Project1/1.png",
        "images/Project1/2.png",
        "images/Project1/3.png",
        "images/Project1/4.png",
        "images/Project1/5.png"
      ]
    },
  ];
  return (
    <div id='currentProjects' >
      <div className={styles["currentProject_container"]}>
        <h1 className={styles["currentProject_title"]}>{trans("current_proj_title")}</h1>
        <div className={styles["block-projects"]}>
          <div className={styles["background"]}>
            <img loading="lazy" src={projects[0].gallery[0]} alt="" />
            <img loading="lazy" src={projects[0].gallery[1]} alt="" />
          </div>
          <div className={styles["projects-content"]}>
            <h1>{trans("current_proj_desc_title")}</h1>
            <h2 className={styles["current_desc_h2"]}>
              <span>{trans("current_proj_desc_1")}</span>{trans("current_proj_desc_2")}
            </h2>
            <p>
              {trans("current_proj_desc_3")}
            </p>

            <div className={styles["button-projects"]}>
              <div className={styles["button_detail_wrapper"]}>
                <ButtonBlueBorder title={trans("current_proj_button_border")} />
              </div>
              <ButtonBlue title={trans("current_proj_button")} click={onOpen} />
              <PopupWithTitle open={open} onClose={onClose} title="Галерея" background="#fff" color="#000">
                <div></div>
                <div className={styles["wrapper_popup_image"]}>
                  {projects[0].allGallery.map((item, index) => (
                    <img src={item} alt="" key={index} className={styles["popup_image"]} />
                  ))}
                </div>
              </PopupWithTitle>
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
