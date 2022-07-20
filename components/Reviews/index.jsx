import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Reviews.module.scss";
import { useTrans } from "../../hooks/useTrans";
import { SamplePrevArrow } from "../SlickSlider/SamplePrevArrow/SamplePrevArrow";
import { SampleNextArrow } from "../SlickSlider/SampleNextArrow/SampleNextArrow";

const sliderPaths = [
   "images/reviews/review1.jpg",
   "images/reviews/review2.jpg",
   "images/reviews/review3.jpg",
   "images/reviews/review4.jpg",
   "images/reviews/review5.jpg",
];
export default function Reviews() {

   const [activeSlide, setActiveSlide] = useState(0);

   const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 300,
      arrows: true,
      dots: true,
      cssEase: "linear",
      responsive: [
         {
            breakpoint: 768,
            settings: {
               infinite: true,
               arrows: false,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               infinite: true,
               arrows: false,
            }
         },
      ],
      beforeChange: next => setActiveSlide(next),
      afterChange: current => setActiveSlide(current),
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
   };

   const { trans } = useTrans();

   return (
      <div id="Reviews">
         <div className={styles["reviews_container"]}>
            <h1 className={styles["reviews_title"]}>
               {trans("reviews_title")}
            </h1>
            <div className={styles["reviews_slider"]}>
               <Slider {...settings}>
                  {sliderPaths.map((p, index) => (
                     <div className={styles["slider_wrapp"]} key={index + 1}>
                        <img loading="lazy"
                           className={`${styles['reviews_slide']} ${activeSlide === index ? styles["slide_center"] : styles["slide_not_center"]}`}
                           // className={`${styles['reviews_slide']} ${activeSlide === index ? styles["slide_center"] : activeSlide === index + 1 ? styles["slide_after_slide"] : index === count ? styles["slide_before_slide"] : styles["slide_not_center"]}`}
                           src={p}
                           alt=""
                        />
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   );
}
