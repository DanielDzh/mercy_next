import React, { useCallback, useState } from "react";
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

  const [galleryPopup, setGalleryPopup] = useState(false);
  const [detailPopup, setDetailPopup] = useState(false)

  const { trans } = useTrans();

  const openPopup = useCallback(() => {
    setDetailPopup(true);
    setGalleryPopup(false);
    onOpen();
  }, []);


  const openPopupGallery = useCallback(() => {
    setGalleryPopup(true);
    setDetailPopup(false);
    onOpen();
  }, []);

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
                <ButtonBlueBorder title={trans("current_proj_button_border")} click={openPopup} detailPopup={detailPopup} setDetailPopup={setDetailPopup} />
                <PopupWithTitle open={detailPopup && open} onClose={onClose} title="Проект" background="#fff" color="#000">
                  <div className={styles["wrapper_popup_details"]}>
                    <h2 className={styles["popup_detail_subtitle"]}>ДОПОМОЖИ незахищеним українцям, які страждають від нападу російських окупантів.</h2>
                    <p className={styles["detail_text_under_st"]}>
                      Фото нижче — із початку війни в Україні, яка розпочалась 24 лютого 2022 року.
                      Сотні смертей дорослих і дітей, тисячі поранених, стільки ж зруйнованих осель.
                      Життя цих людей ніколи не буде колишнім. Багато з них втратили рідних і близьких людей, а ще більше — житло.
                      Українці з «гарячих точок» залишились без роботи,
                      фінансів і навіть без найнеобхідніших засобів існування — їжі, одягу, медикаментів.
                    </p>
                    <div className={styles["wrapper_popup_image"]}>
                      <img src="images/Project1/1.png" alt="" className={styles["popup_image"]} />
                      <img src="images/Project1/3.png" alt="" className={styles["popup_image"]} />
                      <img src="images/Project1/4.png" alt="" className={styles["popup_image"]} />
                      <img src="images/Project1/2.png" alt="" className={styles["popup_image"]} />
                      <img src="images/Project1/5.png" alt="" className={styles["popup_image"]} />
                      <img src="images/Project1/1.png" alt="" className={styles["popup_image"]} />
                    </div>
                    <p className={styles["detail_text_under_st"]}>
                      Ми взяли на себе відповідальність <span>забезпечувати базові потреби тисячі постраждалих людей</span> у
                      «гарячих точках» Київської області <span>кожні 6 днів.</span>
                    </p>
                    <ul className={styles["detail_list"]}>
                      <li className="">
                        <p>
                          <img src="images/icons/circle.png" alt="" className={styles["list_circle"]} />
                          <span>Ціль: </span>**зберегти життя** 1000 українців на наступні 6 днів</p>
                      </li>
                      <li className="">
                        <p>
                          <img src="images/icons/circle.png" alt="" className={styles["list_circle"]} />
                          <span>Локації: </span>с. Биківня, м. Вишневе (Київська область)</p>
                      </li>
                      <li className="">
                        <p>
                          <img src="images/icons/circle.png" alt="" className={styles["list_circle"]} />
                          <span>Допомога: </span>харчові набори для дорослих, харчові набори для дітей, набори медикаментів</p>
                      </li>
                      <li className="">
                        <p>
                          <img src="images/icons/circle.png" alt="" className={styles["list_circle"]} />
                          <span>Вартість: </span>814 тис. грн в тиждень</p>
                      </li>
                      <li>
                        <p>
                          <img src="images/icons/circle.png" alt="" className={styles["list_circle"]} />
                          <span>Залишилось зібрати: </span>*** грн</p>
                      </li>
                    </ul>
                    <p className={styles["detail_under_text"]}>**Кожні $30 продовжують життя однієї людини на 6 днів.**</p>
                    <p className={styles["detail_under_text"]}>**УВАГА!** Зібрані кошти витрачаються тільки на матеріальну допомогу
                      населенню «гарячих точок»: продукти, одяг і медикаменти.
                      Логістику і функціонування команди фонд покриває за власний кошт засновників.
                    </p>
                  </div>
                </PopupWithTitle>
              </div>
              <ButtonBlue title={trans("current_proj_button")} click={openPopupGallery} detailPopup={galleryPopup} setDetailPopup={setGalleryPopup} />
              <PopupWithTitle open={galleryPopup && open} onClose={onClose} title="Галерея" background="#fff" color="#000">
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
