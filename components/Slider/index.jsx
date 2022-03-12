import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import PaymentForm from "../PaymentForm";
import Image from "next/image";

import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaLongArrowAltDown,
} from "react-icons/fa";
import { Link } from "react-scroll";
import Header from "../Header/index";
import useTrans from "../../hooks/useTrans";
import Language from "../Language";
import ButtonBlue from "../ButtonBlue";
import ButtonBlueBorder from "../ButtonBlueBorder";
import PayPal from "../Paypal/Paypal";
import Slide from "./Slide";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";

const sliderPaths = [
  "images/ruins.jpg",
  "images/ruins_2.jpg",
  "images/ruins_3.jpg",
  "images/ruins_4.jpg",
  "images/ruins_5.jpg",
];

export default function HeroSlider() {
  const [paypalShow, setPaypalShow] = useState(false);
  const { open, onOpen, onClose } = useOpenHandlers(false);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      >
        <FaLongArrowAltLeft />
      </div>
    );
  };
  const SampleNextvArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      >
        <FaLongArrowAltRight />
      </div>
    );
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    padding: 20,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextvArrow />,
  };
  return (
    <>
      <PaymentForm open={open} onClose={onClose} />
      <div className={styles["slider-area"]}>
        <div className={styles["slider-activator"]}>
          <div className={styles["container-slider"]}>
            <Header />
            <div className={styles["content-hero"]}>
              <div className={styles["hero-logo"]}>
                <Image
                  src="/images/allLogo.png"
                  alt=""
                  layout="intrinsic"
                  height={77}
                  width={200}
                />
              </div>
              <div className={styles["hero-text"]}>
                <h1>ДОПОМОЖИ</h1>
                <h2>
                  зберегти життя <span>1000</span> людей у гарячих точках під
                  Києвом на <span>6</span> днів!
                </h2>
                <p>
                  Кожні <span>$30</span> продовжують життя однієї людини на{" "}
                  <span>6 днів</span>
                </p>
              </div>
              <div className={styles["hero-progress"]}>
                <div id={styles.myProgress}>
                  <span className={styles["thirty-circle"]}></span>
                  <span className={styles["thirty-price"]}>$ 814 000</span>
                  <div id={styles.myBar}>
                    <span className={styles["first-price"]}>0</span>
                    <span className={styles["second-price"]}>$ 40 000</span>

                    <span className={styles["first-circle"]}></span>
                    <span className={styles["second-circle"]}></span>
                  </div>
                </div>
              </div>
              <div className={styles["hero-buttons"]}>
                <ButtonBlueBorder title="Детальніше" />
                <ButtonBlue title="Допомогти зараз" click={onOpen} />
                {/* <PayPal /> */}
              </div>
            </div>
          </div>
          <div className={styles["hero-slider"]}>
            <Slider {...settings}>
              {sliderPaths.map((p) => (
                <Slide src={p} key={p} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
