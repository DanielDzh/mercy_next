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
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [change, setChange] = useState(trans('language'));
  const sortRef = useRef();
  const router = useRouter();
  // const textInput = useRef(true);
  // const textInputCheck = useRef(true);
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
      // if (textInput === true) {
      // textInput.current.click();
      // textInputCheck.current.checked(false);
      // }
    }
  };

  // const toggleVisiblePopup = () => {
  //   setVisiblePopup(!visiblePopup);
  // };

  const changeLang = (name) => {
    router.push(router.asPath, router.asPath, { locale: name });
    setChange(name);
  };

  return (
    <>
      <div className={styles["sec_center"]}>
        <input className={styles["dropdown"]} type="checkbox" id="dropdown" name="dropdown" />
        <label className={styles["for_dropdown"]} htmlFor="dropdown">{trans("language")} <img loading="lazy" src="images/icons/arrowDown.png" className={styles["uil"]} alt="" /></label>
        <div className={styles["section_dropdown"]}>
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