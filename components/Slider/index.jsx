import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import { usePaymentPopup } from "../../hooks/usePaymentPopup";
import { useQueryHandlers } from "../../hooks/useQueryHanlders";
import { useTrans } from "../../hooks/useTrans";
import { formatCurrency } from "../../utils/formatCurrency";
import ButtonBlue from "../ButtonBlue";
import ButtonBlueBorder from "../ButtonBlueBorder";
import Header from "../Header/index";
import PaymentForm, { PAYMENT_POPUP } from "../PaymentForm";
import UnsubscribePopup, { UNSUBSCRIBE } from "../UnsubscribePopup";
import Slide from "./Slide";
import styles from "./Slider.module.scss";
import CountUp from "react-countup";


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

export default function HeroSlider({ totalAmount, expectedAmount, projectsRef }) {
  const { trans } = useTrans();

  const { openedOneTimePayment, onOpenOneTimePayment, onClosePayment } =
    usePaymentPopup();

  const { isOpened: isUnsibscribeOpen, onClose: onUnsubscribeClose } =
    useQueryHandlers(PAYMENT_POPUP, UNSUBSCRIBE);

  const [width, setWidth] = useState(0);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    padding: 20
  };

  useEffect(() => {
    setWidth(getProgressPercent(totalAmount, expectedAmount))
  }, [])
  return (
    <>
      {openedOneTimePayment ? (
        <PaymentForm open={openedOneTimePayment} onClose={onClosePayment} />
      ) : null}
      {isUnsibscribeOpen ? (
        <UnsubscribePopup
          open={isUnsibscribeOpen}
          onClose={onUnsubscribeClose}
        />
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
                  {trans("slider_desc_1")} <span>{trans("slider_desc_2")}</span> <br />
                  {trans("slider_desc_3")}
                </h2>
                <p>
                  {trans("slider_p_1")} <span>{formatCurrency(20)}</span>{" "}
                  {trans("slider_p_2")}
                  <span> {trans("slider_p_3")}</span>
                </p>
                <p className={styles['slider-collected']}>{trans('collected_assistance')}</p>
              </div>
              <div className={styles["hero-progress"]}>
                <div id={styles.myProgress}>
                  <span className={styles["thirty-circle"]} />
                  <span className={styles["thirty-price"]}>
                    <CountUp
                      start={0}
                      end={Math.floor(expectedAmount)}
                      duration={2}
                      separator=","
                      decimals={2}
                      decimal="."
                      prefix="$"
                    />
                  </span>
                  <div
                    id={styles.myBar}
                    style={{
                      width: `${width}%`,
                    }}
                  >
                    <span className={styles["first-price"]}>0</span>
                    <span className={styles["second-price"]}>
                     <CountUp
                       start={4}
                       end={Math.floor(totalAmount)}
                       duration={2}
                       separator=","
                       decimals={2}
                       decimal="."
                       prefix="$"
                     />
                    </span>
                    <span className={styles["first-circle"]} />
                    <span className={styles["second-circle"]} />
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
                  style={{ width: '100%' }}
                >
                  <ButtonBlueBorder
                    className="details"
                    title={trans("slider_button_blue_border")}
                  />
                </Link>

                <ButtonBlue
                  title={trans("slider_button_blue")}
                  click={onOpenOneTimePayment}
                />
                {/* <PayPal /> */}
              </div>
              <Link
                to="currentProjects"
                smooth={true}
                duration={2000}
                spy={false}
                offset={5}
                onClick={() => projectsRef.current.slickGoTo(6)}>
                <a className={styles["hero-before"]}>
                  {trans('slider_p_before')}
                  <img src={"images/icons/long-arrow.svg"} alt='' />
                </a>
              </Link>
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
            <img loading="lazy" src={"images/backHero.png"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
