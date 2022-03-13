import React, { useRef, useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./Language.module.scss";
import { useTrans } from "../hooks/useTrans";
import { useRouter } from "next/router";

const languages = [
  {
    code: "ru",
    name: "Русский",
    countryCode: "ru",
  },
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
  const [change, setChange] = useState(t("language"));
  const sortRef = useRef();
  const router = useRouter();

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const changeLang = (name) => {
    router.push(router.asPath, router.asPath, { locale: name });
    setChange(name);
  };

  return (
    <div className={styles.language}>
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
    </div>
  );
};

export default Language;
