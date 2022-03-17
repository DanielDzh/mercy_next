import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Reviews.module.scss";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";

const sliderPaths = [
   "images/reviews/review1.jpg",
   "images/reviews/review2.jpg",
   "images/reviews/review3.jpg",
   "images/reviews/review4.jpg",
   "images/reviews/review5.jpg",
];
const count = sliderPaths.lenght;
export default function Reviews() {

   const [activeSlide, setActiveSlide] = useState(0);

   const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '40%', bottom: '0%', width: '3vw', height: '3vw', padding: '.8vw', borderRadius: '50px', backgroundColor: 'unset', opacity: .5, zIndex: 2 }}
            onClick={onClick}
         >
            <img style={{ width: '100%', height: '100%' }} src="images/icons/back.png" alt="" />
         </div>
      );
   };
   const SampleNextvArrow = (props) => {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '40%', bottom: '0%', width: '3vw', height: '3vw', padding: '.8vw', borderRadius: '50px', backgroundColor: 'unset', opacity: .5 }}
            onClick={onClick}
         >
            <img style={{ width: '100%', height: '100%' }} src="images/icons/next.png" alt="" />
         </div>
      );
   };

   const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      arrows: true,
      dots: true,
      cssEase: "linear",
      responsive: [
         {
            breakpoint: 768,
            settings: {
               // slidesToShow: 1,
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
      appendDots: dots => (
         <div
            style={{
               backgroundColor: "unset",
               borderRadius: "10px",
               padding: "10px",
               marginTop: '4vw'
            }}
         >
            <ul style={{ margin: "0px" }}> {dots} </ul>
         </div>
      ),
      customPaging: i => (
         <a>
            <div className={styles["custom_paging"]}
               style={{
                  backgroundColor: `${i === activeSlide ? '#ffbc15' : "#525252"}`,
                  // boxShadow: `${i === activeSlide ? '0px 0px 7px rgb(255 188 21 / 50%)' : "0px 0px 7px rgb(16 166 249 / 30%)"}`,

               }}
            >
               {/* {i + 1} */}
            </div>
         </a>
      ),
      beforeChange: next => setActiveSlide(next),
      afterChange: current => setActiveSlide(current),
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextvArrow />,
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
                        <img
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
