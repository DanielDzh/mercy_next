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
  },
  {
    code: "en",
    name: "English",
    countryCode: "en",
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
        {/* <input className={styles["dropdown"]} type="checkbox" id="dropdown" name="dropdown" ref={textInputCheck} /> */}
        <label className={styles["for_dropdown"]} onClick={() => setState(!state)}>{trans("language")} <img style={{ transform: state ? "rotate(180deg)" : "rotate(0deg)" }} loading="lazy" src="images/icons/arrowDown.png" className={styles["uil"]} alt="" /></label>

        <div className={styles["section_dropdown"]} style={{ opacity: state ? 1 : 0, transform: state ? "translateY(0px)" : "translateY(20px)" }}>
          {languages.map(({ code, name, countryCode }) => (
            <a className={styles["a"]} href="#" key={countryCode} onClick={() => changeLang(code)}>{name}</a>
          ))}
        </div>
      </div>
      {/* <div className={styles["sec_center_mobile"]}>
        <input className={styles["dropdown_mobile"]} type="checkbox" id="dropdown" name="dropdown" />
        <label className={styles["for_dropdown_mobile"]} htmlFor="dropdown">{trans("language")} <img loading="lazy" src="images/icons/arrowDown.png" className={styles["uil"]} alt="" /></label>
        <div className={styles["section_dropdown_mobile"]}>
          {languages.map(({ code, name, countryCode }) => (
            <a className={styles["a"]} href="#" key={countryCode} onClick={() => changeLang(code)}>{name}</a>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Language;


{/* <div className={styles.language}>
      <DropdownButton
        align="end"
        id={styles["dropdown-variants-Secondary"]}
        title={trans("language")}
        className={
          visiblePopup ? styles["dropArrowTop"] : styles["dropArrowDown"]
        }
        style={{ color: colorTitle }}
        ref={sortRef}
        onClick={toggleVisiblePopup}
      >
        {languages.map(({ code, name, countryCode }) => (
          <Dropdown.Item
            href=""
            key={countryCode}
            onClick={() => changeLang(code)}
            className={change === code ? styles["change"] : ""}
          >
            {name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div> */}