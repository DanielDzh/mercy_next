import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Reviews.module.scss";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";
import { Link } from "react-scroll";

const sliderPaths = [
   {
      date: '14 квітня',
      amount: '60 бронежелетів',
      city: 'м.Харків',
      img: "images/reviews/reviews.png",
   },
   {
      date: '14 квітня',
      amount: '60 бронежелетів',
      city: 'м.Харків',
      img: "images/reviews/reviews.png",
   },
   {
      date: '14 квітня',
      amount: '60 бронежелетів',
      city: 'м.Харків',
      img: "images/reviews/reviews.png",
   },
   {
      date: '14 квітня',
      amount: '60 бронежелетів',
      city: 'м.Харків',
      img: "images/reviews/reviews.png",
   },
   {
      date: '14 квітня',
      amount: '60 бронежелетів',
      city: 'м.Харків',
      img: "images/reviews/reviews.png",
   },
   {
      date: '14 квітня',
      amount: '60 бронежелетів',
      city: 'м.Харків',
      img: "images/reviews/reviews.png",
   },
   {
      date: '14 квітня',
      amount: '60 бронежелетів',
      city: 'м.Харків',
      img: "images/reviews/reviews.png",
   },
   {
      date: '14 квітня',
      amount: '60 бронежелетів',
      city: 'м.Харків',
      img: "images/reviews/reviews.png",
   }
];
const count = sliderPaths.lenght;
export default function Reviews() {

   const [activeSlide, setActiveSlide] = useState(0);

   const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '37%', bottom: '0%', height: '3vw', padding: '.8vw', borderRadius: '50px', backgroundColor: 'unset', zIndex: 2 }}
            onClick={onClick}
         >
            <img loading="lazy" style={{ width: '100%', height: '100%' }} src="images/icons/back.png" alt="" />
         </div>
      );
   };
   const SampleNextvArrow = (props) => {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '37%', bottom: '0%', height: '3vw', padding: '.8vw', borderRadius: '50px', backgroundColor: 'unset' }}
            onClick={onClick}
         >
            <img loading="lazy" style={{ width: '100%', height: '100%' }} src="images/icons/next.png" alt="" />
         </div>
      );
   };

   const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 300,
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
                  backgroundColor: `${i === activeSlide ? '#10A6F9' : "#525252"}`,
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
      <div id="reviews">
         <div className={styles["reviews_container"]}>
            <div className={styles["reviews_title"]}>

               <h1 className={styles["reviews_title_h1"]}>
                  {trans("reviews_title")}
               </h1>
               <p className={styles["reviews_title_p"]}>
                  {trans("reviews_title_2")}
               </p>
               <div className={styles["reviews_title_block"]}>
                  <span className={styles["reviews_title_block_span_yellow"]}>85 </span>
                  <span>комплексів на суму </span>
                  <span className={styles["reviews_title_block_span_yellow"]}>18700 </span>
                  <span>USD</span>
               </div>
            </div>
            <div className={styles["reviews_slider"]}>
               <Slider {...settings}>
                  {sliderPaths.map((item, index) => (
                     <div className={styles["slider_wrapp"]} key={index + 1}>
                        <div className={styles["slider_wrapp_img"]}>
                           <img loading="lazy"
                              className={styles['reviews_slide']}
                              src={item.img}
                              alt=""
                           />
                        </div>
                        <div className={styles["slide_desc"]}>
                           <div className={styles["slide_desc_cont"]}>
                              <img src="images/icons/date.png" alt="" />
                              <p>{item.date}</p>
                           </div>
                           <div className={styles["slide_desc_cont"]}>
                              <img src="images/icons/amount.png" alt="" />
                              <p>{item.amount}</p>
                           </div>
                           <div className={styles["slide_desc_cont"]}>
                              <img src="images/icons/city.png" alt="" />
                              <p>{item.city}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>

            <Link
               className={styles["link"]}
               to="details"
               smooth={true}
               duration={2000}
               activeClass="active"
               spy={false}
               offset={5}
            >
               <ButtonBlue title={trans("slider_button_blue")} />
            </Link>
         </div>
      </div>
   );
}
