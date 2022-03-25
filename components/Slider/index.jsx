import React from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import PaymentForm, { ONE_TIME_MODE, PAYMENT_POPUP } from "../PaymentForm";
import Image from "next/image";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Header/index";
import { useTrans } from "../../hooks/useTrans";
import ButtonBlue from "../ButtonBlue";
import ButtonBlueBorder from "../ButtonBlueBorder";
import Slide from "./Slide";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-scroll";
import { formatCurrency } from "../../utils/formatCurrency";
import Language from "../Language";
import { usePaymentPopup } from "../../hooks/usePaymentPopup";

const sliderPaths = [
  "images/ruins.jpg",
  "images/ruins_2.jpg",
  "images/ruins_3.jpg",
  "images/ruins_4.jpg",
  "images/ruins_5.jpg",
];

const getProgressPercent = (total, expected) => {
  const value = (total / expected) * 100;
  if (value > 100) return 100;
  if (value < 0) return 0;
  return value;
};

export default function HeroSlider({ totalAmount, expectedAmount }) {
  const { trans } = useTrans();

  const { openedOneTimePayment, onOpenOneTimePayment, onClosePayment } =
    usePaymentPopup();

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
      {openedOneTimePayment ? (
        <PaymentForm open={openedOneTimePayment} onClose={onClosePayment} />
      ) : null}
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
                <h1>{trans("slider_title")}</h1>
                <h2>
                  {trans("slider_desc_1")} <span>1000</span>{" "}
                  {trans("slider_desc_2")} <span>6</span>{" "}
                  {trans("slider_desc_3")}
                </h2>
                <p>
                  {trans("slider_p_1")} <span>{formatCurrency(30)}</span>{" "}
                  {trans("slider_p_2")}
                  <span> {trans("slider_p_3")}</span>
                </p>
                {/* <p>{trans('slider_p_renewal')}</p> */}
              </div>
              <div className={styles["hero-progress"]}>
                <div id={styles.myProgress}>
                  <span className={styles["thirty-circle"]}></span>
                  <span className={styles["thirty-price"]}>
                    {formatCurrency(expectedAmount)}
                  </span>
                  <div
                    id={styles.myBar}
                    style={{
                      width: `${getProgressPercent(
                        totalAmount,
                        expectedAmount
                      )}%`,
                    }}
                  >
                    <span className={styles["first-price"]}>0</span>
                    <span className={styles["second-price"]}>
                      {formatCurrency(Math.floor(totalAmount))}
                    </span>

                    <span className={styles["first-circle"]}></span>
                    <span className={styles["second-circle"]}></span>
                  </div>
                </div>
              </div>
              <div className={styles["hero-buttons"]}>
                <Link
                  className={styles["link"]}
                  to="currentProjects"
                  smooth={true}
                  duration={2000}
                  activeClass="active"
                  spy={false}
                  offset={5}
                >
                  <ButtonBlueBorder
                    title={trans("slider_button_blue_border")}
                  />
                </Link>

                <ButtonBlue
                  title={trans("slider_button_blue")}
                  click={onOpenOneTimePayment}
                />
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
          <div className={styles["hero_photo_mobile"]}>
            <img loading="lazy" src="images/backHero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
