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

  const projects = [
    {
      done: true,
      label: "proj_label_done",
      title: "finished_proj_desc_title",
      desc1: "proj_desc_1_1",
      desc2: "proj_desc_1_2",
      desc3: "proj_desc_1_3",
      gallery: ["images/project1/project1-hero-1.png", "images/project1/project1-hero-2.png"],
      allGallery: [
        "images/project1/1.png",
        "images/project1/2.png",
        "images/project1/3.png",
        "images/project1/4.png",
        "images/project1/5.png",
        "images/project1/6.jpg",
        "images/project1/8.jpg",
        "images/project1/9.jpg",
        "images/project1/10.jpg",
        "images/project1/11.jpg",
        "images/project1/12.jpg",
        "images/project1/13.jpg",
        "images/project1/14.jpg",
        "images/project1/15.jpg",
      ],
      popup_details_subtitle: "popup_details_subtitle_1",
      popup_details_text_above_photo: "popup_details_text_above_photo_1",
      popup_details_text_under_photo_normal: "popup_details_text_under_photo_normal_1",
      popup_details_text_bottom: "popup_details_text_bottom_1",
    },
    {
      done: true,
      label: "proj_label_done",
      title: "finished_proj_desc_title",
      desc1: "proj_desc_2_1",
      desc2: "proj_desc_2_2",
      desc3: "proj_desc_2_3",
      gallery: ["images/project2/project3-hero-1.jpg", "images/project2/project3-hero-2.jpg"],
      allGallery: [
        "images/project2/1.jpg",
        "images/project2/2.jpg",
        "images/project2/3.jpg",
        "images/project2/4.jpg",
        "images/project2/5.jpg",

        "images/project2/6.jpg",
        "images/project2/8.jpg",
        "images/project2/9.jpg",
        "images/project2/10.jpg",
        "images/project2/11.jpg",
        "images/project2/12.jpg",
        "images/project2/13.jpg",
      ],
      popup_details_subtitle: "popup_details_subtitle_2",
      popup_details_text_above_photo: "popup_details_text_above_photo_2",
      popup_details_text_under_photo_normal: "popup_details_text_under_photo_normal_2",
      popup_details_text_bottom: "popup_details_text_bottom_2",
    },
    {
      done: true,
      label: "proj_label_done",
      title: "finished_proj_desc_title",
      desc1: "proj_desc_3_1",
      desc2: "proj_desc_3_2",
      desc3: "proj_desc_3_3",
      gallery: ["images/project3/hero-1.jpg", "images/project3/2.png"],
      allGallery: [
        "images/project3/7.jpg",
        "images/project3/1.jpg",
        "images/project3/2.jpg",
        "images/project3/3.jpg",
        "images/project3/10.jpg",
        "images/project3/4.jpg",
        "images/project3/5.jpg",
        "images/project3/6.jpg",
        "images/project3/8.jpg",
        "images/project3/9.jpg",
        "images/project3/11.jpg",
      ],
      popup_details_subtitle: "popup_details_subtitle_3",
      popup_details_text_above_photo: "popup_details_text_above_photo_3",
      popup_details_text_under_photo_normal: "popup_details_text_under_photo_normal_3",
      popup_details_text_bottom: "popup_details_text_bottom_2",
    },
  ];

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
  };

  useEffect(() => {
    projectsRef.current.slickGoTo(2)
  }, [])

  return (
    <div id='currentProjects'>
      <div className={styles["currentProject_container"]}>
        <h1 className={styles["currentProject_title"]}>{trans("current_proj_title")}</h1>
        <div className={styles["projects-wrapper"]}>
          <Slider {...settings} ref={projectsRef}>
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
            <div
              className={styles["detail_text_under_st"]}
              dangerouslySetInnerHTML={{ __html: trans(projects[detailPopup - 1].popup_details_text_under_photo_normal) }} />
            <div className={styles["detail_under_text"]}
                 dangerouslySetInnerHTML={{ __html: trans(projects[detailPopup - 1].popup_details_text_bottom) }} />
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
