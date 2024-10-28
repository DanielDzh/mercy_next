import React, { useCallback, useEffect, useState } from "react";
import styles from "./CurrentProjects.module.scss";
import Slider from "react-slick";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";
import PopupWithTitle from "../common/PopupWithTitle";
import cn from "classnames";
import { SamplePrevArrow } from "../SlickSlider/SamplePrevArrow/SamplePrevArrow";
import { SampleNextArrow } from "../SlickSlider/SampleNextArrow/SampleNextArrow";
import { projects } from "../../utils/projects";

export default function CurrentProjects({ projectsRef }) {
  const { open, onOpen, onClose } = useOpenHandlers(false);

  const [galleryPopup, setGalleryPopup] = useState(null);
  const [detailPopup, setDetailPopup] = useState(null);

  const { trans } = useTrans();

  const openPopup = useCallback((index) => {
    setDetailPopup(index + 1);
    setGalleryPopup(null);
    onOpen();
  }, []);


  const openPopupGallery = useCallback((index) => {
    setGalleryPopup(index + 1);
    setDetailPopup(null);
    onOpen();
  }, []);


  const settings = {
    infinite: true,
    padding: 20,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: true,
    dots: true,
    cssEase: "linear",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
          arrows: false,
        }
      },
    ],
    afterChange: () => {
      const element = document.getElementsByClassName('project-slider')[0];
      const activeDotEl = element.querySelector('.slick-dots li.slick-active');
      activeDotEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  useEffect(() => {
    projectsRef.current.slickGoTo(projects.length-1)
  }, [])

  return (
    <div id='currentProjects'>
      <div className={styles["currentProject_container"]}>
        <h1 className={styles["currentProject_title"]}>{trans("current_proj_title")}</h1>
        <div className={styles["projects-wrapper"]}>
          <Slider {...settings} ref={projectsRef} on className="project-slider">
            {projects.map((project, index) => (
              <div key={index}>
                <div className={styles["block-projects"]}>
                  <div className={cn(styles["project-label"], { [styles["project-label-done"]]: project.done })}>
                    <p className={styles["current_desc3"]} dangerouslySetInnerHTML={{ __html: trans(project.label) }} />
                    {project.done ? <img src={"images/icons/label-green.svg"} alt='' /> :
                      <img src={"images/icons/label-yellow.svg"} alt='' />}
                  </div>
                  <div className={styles["background"]}>
                    <img loading="lazy" src={project.gallery[0]} alt="" />
                    <img loading="lazy" src={project.gallery[1]} alt="" />
                  </div>
                  <div className={styles["projects-content"]}>
                    <h1>{trans(project.title)}</h1>
                    <h2 className={styles["current_desc_h2"]}
                        dangerouslySetInnerHTML={{ __html: trans(project.desc1) }} />
                    {project.done && <>
                      {project.desc3 &&
                        <p className={styles["current_desc3"]}
                           dangerouslySetInnerHTML={{ __html: trans(project.desc3) }} />}
                      <div className={styles["current_progress"]} />
                    </>}
                    <p className={styles["current_desc3"]} dangerouslySetInnerHTML={{ __html: trans(project.desc2) }} />
                    {project.done && <div className={styles["button-projects"]}>
                      <div className={styles["button_detail_wrapper"]}>
                        <ButtonBlueBorder title={trans("current_proj_button_border")} click={() => openPopup(index)} />
                      </div>
                      <ButtonBlue title={trans("current_proj_button")} click={() => openPopupGallery(index)} />
                    </div>}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {detailPopup && <PopupWithTitle
          open={open}
          onClose={onClose}
          title={trans("popup_details_title")}
          background={"#fff"}
          color="#000">
          <div className={styles["wrapper_popup_details"]}>
            <h2 className={styles["popup_detail_subtitle"]}>
              {trans(projects[detailPopup - 1].popup_details_subtitle)}
            </h2>
            <div
              className={styles["detail_text_under_st"]}
              dangerouslySetInnerHTML={{ __html: trans(projects[detailPopup - 1].popup_details_text_above_photo) }} />
            <div className={styles["wrapper_popup_image"]}>
              {projects[detailPopup - 1].allGallery.slice(0, 4).map((project, index) =>
                <img key={index} src={project} alt="" className={styles["popup_image"]} />)}
            </div>
            {projects[detailPopup - 1].popup_details_text_under_photo_normal && <div
              className={styles["detail_text_under_st"]}
              dangerouslySetInnerHTML={{ __html: trans(projects[detailPopup - 1].popup_details_text_under_photo_normal) }} />}
            {projects[detailPopup - 1].popup_details_text_bottom &&
              <div className={styles["detail_under_text"]}
                   dangerouslySetInnerHTML={{ __html: trans(projects[detailPopup - 1].popup_details_text_bottom) }} />}
          </div>
        </PopupWithTitle>}
        {galleryPopup && <PopupWithTitle
          open={open}
          onClose={onClose}
          title={trans("popup_gallery_title")}
          background={"#fff"} color="#000">
          <div />
          <div className={styles["wrapper_popup_image"]}>
            {projects[galleryPopup - 1].allGallery.map((item, index) => (
              <img src={item} alt="" key={index} className={styles["popup_image"]} />
            ))}
          </div>
        </PopupWithTitle>}
      </div>
    </div>
  );
}
