import React, { useRef, useState, useEffect } from "react";
import styles from "./Language.module.scss";
import { useRouter } from "next/router";
import { useTrans } from "../../hooks/useTrans";

const languages = [
  // {
  //   code: "ru",
  //   name: "Русский",
  //   countryCode: "ru",
  // },
  {
    code: "ua",
    name: "Українська",
    countryCode: "ua",
    image: "images/icons/Ukr.png"
  },
  {
    code: "en",
    name: "English",
    countryCode: "en",
    image: "images/icons/Eng.png"
  },
];

const Language = ({ colorTitle }) => {
  const { trans } = useTrans();
  const [state, setState] = useState(false);
  const [change, setChange] = useState(trans('language'));
  const router = useRouter();
  const textInput = useRef();
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(textInput.current)) { setState(false) };
  };

  const changeLang = (name) => {
    router.push(router.asPath, router.asPath, { locale: name });
    setChange(name);
    setState(false);
  };

  return (
    <>
      <div className={styles["sec_center"]} ref={textInput}>
        <label className={styles["for_dropdown"]} onClick={() => setState(!state)}>
          {languages.map((item, index) => item.code === change ? <img className={styles.imgLang} key={index} src={item.image} /> : '')}
          <img style={{ transform: state ? "rotate(180deg)" : "rotate(0deg)" }} loading="lazy" src="images/icons/arrowDown.png" className={styles["uil_desc"]} alt="" />
          <img style={{ transform: state ? "rotate(180deg)" : "rotate(0deg)" }} loading="lazy" src="images/icons/arrowRight.png" className={styles["uil_mobile"]} alt="" />
        </label>

        <div className={styles["section_dropdown_desc"]} style={{ opacity: state ? 1 : 0, transform: state ? "translateY(0px)" : "translateY(20px)" }}>
          {languages.map(({ code, name, countryCode }) => (
            <a className={styles["a"]} href="#" key={countryCode} onClick={() => changeLang(code)}>{name}</a>
          ))}
        </div>
        <div className={styles["section_dropdown_mobile"]} style={{ opacity: state ? 1 : 0, transform: state ? "translateX(0px)" : "translateX(20px)" }}>
          {languages.map(({ code, name, countryCode }) => (
            <a className={styles["a"]} href="#" key={countryCode} onClick={() => changeLang(code)}>{name}</a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Language;