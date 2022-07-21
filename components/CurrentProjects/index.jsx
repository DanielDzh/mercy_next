import React, { useCallback, useState } from "react";
import styles from "./CurrentProjects.module.scss";
import Slider from "react-slick";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlue from "../ButtonBlue";
import Warning from "../Warning";
import { useTrans } from "../../hooks/useTrans";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";
import PopupWithTitle from "../common/PopupWithTitle";
import cn from "classnames";
import { SamplePrevArrow } from "../SlickSlider/SamplePrevArrow/SamplePrevArrow";
import { SampleNextArrow } from "../SlickSlider/SampleNextArrow/SampleNextArrow";

export default function CurrentProjects({ projectsRef }) {
  const { open, onOpen, onClose } = useOpenHandlers(false);

  const [galleryPopup, setGalleryPopup] = useState(false);
  const [detailPopup, setDetailPopup] = useState(false);

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
      done:true,
      label: "proj_label_done",
      title: "finished_proj_desc_title",
      desc1: "finished_proj_desc_1",
      desc2:"finished_proj_desc_3",
      desc3:"finished_proj_desc_2",
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
    },
    {
      done:false,
      label: "proj_label_in_process",
      title: "current_proj_desc_title",
      desc1: "current_proj_desc_1",
      desc2:"current_proj_desc_3",
      desc3:"",
      gallery: ["images/project2/project2-hero-1.png", "images/project2/project2-hero-2.png"],
      allGallery: [],
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

  return (
    <div id='currentProjects' >
      <div className={styles["currentProject_container"]}>
        <h1 className={styles["currentProject_title"]}>{trans("current_proj_title")}</h1>
       <div className={styles["projects-wrapper"]} >
         <Slider {...settings} ref={projectsRef}>
           {projects.map((project,index)=>(
             <div key={index}>
               <div className={styles["block-projects"]}>
                 <div className={cn(styles["project-label"],{[styles["project-label-done"]]:project.done})}>
                   <p className={styles["current_desc3"]} dangerouslySetInnerHTML={{__html:trans(project.label)}}/>
                   {project.done ?<img src={"images/icons/label-green.svg"}  alt=''/>:<img src={"images/icons/label-yellow.svg"}  alt=''/>}
                 </div>
                 <div className={styles["background"]}>
                   <img loading="lazy" src={project.gallery[0]} alt="" />
                   <img loading="lazy" src={project.gallery[1]} alt="" />
                 </div>
                 <div className={styles["projects-content"]}>
                   <h1>{trans(project.title)}</h1>
                   <h2 className={styles["current_desc_h2"]} dangerouslySetInnerHTML={{__html:trans(project.desc1)}}/>
                   {project.done && <>
                     {project.desc3 && <p className={styles["current_desc3"]} dangerouslySetInnerHTML={{__html: trans(project.desc3)}} />}
                     <div className={styles["current_progress"]}/>
                   </>}
                   <p className={styles["current_desc3"]} dangerouslySetInnerHTML={{__html:trans(project.desc2)}}/>
                   {project.done && <div className={styles["button-projects"]}>
                     <div className={styles["button_detail_wrapper"]}>
                       <ButtonBlueBorder title={trans("current_proj_button_border")} click={openPopup}
                                         detailPopup={detailPopup} setDetailPopup={setDetailPopup} />
                     </div>
                     <ButtonBlue title={trans("current_proj_button")} click={openPopupGallery} detailPopup={galleryPopup}
                                 setDetailPopup={setGalleryPopup} />
                   </div>}
                 </div>
               </div>
             </div>
           ))}
         </Slider>
       </div>
        <PopupWithTitle open={detailPopup && open} onClose={onClose} title={trans("popup_details_title")}
                        background={"#fff"} color="#000">
          <div className={styles["wrapper_popup_details"]}>
            <h2 className={styles["popup_detail_subtitle"]}>{trans("popup_details_subtitle")}</h2>
            <p className={styles["detail_text_under_st"]}>
              {trans("popup_details_text_above_photo")}
            </p>
            <div className={styles["wrapper_popup_image"]}>
              <img src={"images/project1/1.png"} alt="" className={styles["popup_image"]} />
              <img src={"images/project1/3.png"} alt="" className={styles["popup_image"]} />
              <img src={"images/project1/2.png"} alt="" className={styles["popup_image"]} />
              <img src={"images/project1/5.png"} alt="" className={styles["popup_image"]} />
            </div>
            <p className={styles["detail_text_under_st"]}>
              {trans("popup_details_text_under_photo_normal_1")} <span>{trans("popup_details_text_under_photo_bold_1")}</span> у
              {trans("popup_details_text_under_photo_normal_2")}
            </p>
            <p className={styles["detail_under_text"]}>
              {trans("popup_details_text_bottom_2_bold")} <span>{trans("popup_details_text_bottom_2")}</span>
            </p>
          </div>
        </PopupWithTitle>
        <PopupWithTitle
          open={galleryPopup && open}
          onClose={onClose}
          title={trans("popup_gallery_title")}
          background={"#fff"} color="#000">
          <div />
          <div className={styles["wrapper_popup_image"]}>
            {projects[0].allGallery.map((item, index) => (
              <img src={item} alt="" key={index} className={styles["popup_image"]} />
            ))}
          </div>
        </PopupWithTitle>
        <Warning
          color="#FF0000"
          text={trans("warning")}
        />
      </div>
    </div>
  );
}
