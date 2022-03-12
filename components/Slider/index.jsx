import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import sliderImg01 from "../../public/images/slider/person.png";
import ruin from "../../public/images/ruins.jpg";
import ruin_2 from "../../public/images/ruins_2.jpg";
import ruin_3 from "../../public/images/ruins_3.jpg";
import ruin_4 from "../../public/images/ruins_4.jpg";
import ruin_5 from "../../public/images/ruins_5.jpg";
// import logo from "../../public/images/allLogo.png";
import { PayPalButton } from "react-paypal-button-v2";
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

const sliderPaths = [
  "images/ruins.jpg",
  "images/ruins_2.jpg",
  "images/ruins_3.jpg",
  "images/ruins_4.jpg",
  "images/ruins_5.jpg",
];

export default function HeroSlider() {
  const [checkout, setCheckOut] = useState(10);
  const [paypalShow, setPaypalShow] = useState(false);

  // useEffect(() => {
  //     var i = 0;
  //     function move() {
  //         if (i == 0) {
  //             i = 1;
  //             var elem = document.getElementById("myBar");
  //             var width = 1;
  //             var id = setInterval(frame, 10);
  //             function frame() {
  //                 if (width >= 100) {
  //                     clearInterval(id);
  //                     i = 0;
  //                 } else {
  //                     width++;
  //                     elem.style.width = width + "%";
  //                 }
  //             }
  //         }
  //     }
  // }, []);

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
    <div className="">
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
                <ButtonBlue
                  title="Допомогти зараз"
                  click={() => setPaypalShow(!paypalShow)}
                />
                {/* <PayPal /> */}
              </div>

              {paypalShow ? (
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      marginLeft: "0rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        marginBottom: "0.2rem",
                        maxWidth: "90%",
                      }}
                    >
                      Сума яку ви готові пожертвувати (USD)
                    </span>
                    <input
                      className={styles["inputPay"]}
                      type="number"
                      value={checkout}
                      onChange={(e) => setCheckOut(e.target.value)}
                      style={{ marginBottom: "0.5rem" }}
                    />
                    <PayPalButton
                      options={{
                        clientId:
                          "AbvUBU_X7bbryvygGCuXucSTmWCPMsOixIshZb_jpjNcPTZ4QFQE_MGzd4Fval-vKeaftnQHYh7jpHqQ",
                        currency: "USD",
                      }}
                      amount={checkout}
                      shippingPreference={"NO_SHIPPING"}
                      onSuccess={(details, data) => {
                        alert("Transiction completed");

                        console.log({ details, data });
                      }}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
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
    </div>
  );
}
