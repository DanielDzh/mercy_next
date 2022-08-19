import React from 'react'
import styles from './OurPartners.module.scss';
import Slider from "react-slick";
import { useTrans } from '../../hooks/useTrans';

const OurPartners = () => {

   const { trans } = useTrans();

   const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      speed: 10000,
      slidesToScroll: 1,
      variableWidth: true
   };

   return (
      <div id="ourPartners">
         <div className={styles["ourPartners_container"]}>
            <h1 className={styles["ourPartners_title"]}>
               {trans("our_partners")}
            </h1>
            <div className={styles["ourPartners_slider"]}>
               <Slider {...settings}>
                  <div className={styles["image_wrapp"]}>
                     <img loading="lazy" src="images/partner1.png" alt="" className={styles["image"]} />
                  </div>
                  <div className={styles["image_wrapp"]}>
                     <img loading="lazy" src="images/partner2.png" alt="" className={styles["image"]} />
                  </div>
                  <div className={styles["image_wrapp"]}>
                     <img loading="lazy" src="images/partner3.png" alt="" className={styles["image"]} />
                  </div>
                  <div className={styles["image_wrapp"]}>
                     <img loading="lazy" src="images/partner4.png" alt="" className={styles["image"]} />
                  </div>
                  <div className={styles["image_wrapp"]}>
                     <img loading="lazy" src="images/partner1.png" alt="" className={styles["image"]} />
                  </div>
                  <div className={styles["image_wrapp"]}>
                     <img loading="lazy" src="images/partner2.png" alt="" className={styles["image"]} />
                  </div>
                  <div className={styles["image_wrapp"]}>
                     <img loading="lazy" src="images/partner3.png" alt="" className={styles["image"]} />
                  </div>
                  <div className={styles["image_wrapp"]}>
                     <img loading="lazy" src="images/partner4.png" alt="" className={styles["image"]} />
                  </div>
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default OurPartners