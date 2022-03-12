import React from "react";
import styles from "./OurTeam.module.scss";

const people = [
  {
    photo: "images/Danil.jpg",
    name: "Даниїл Богатюк",
    profession: "Координатор, Логіст, Організатор",
    telegram: "example",
    instagram: "example",
    facebook: "example",
  },
  {
    photo: "images/TetianaVovk.jpg",
    name: "Тетяна Вовк",
    profession: "СММ-менеджер",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/MaksSigua.jpg",
    name: "Максим Сігуа",
    profession: "Таргетолог",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/Daria.jpg",
    name: "Дар‘я Титарчук",
    profession: "SMM-спеціаліст",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/humanYellow.png",
    name: "Вася Черняк",
    profession: "UX/XUI Designer",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/humanYellow.png",
    name: "Вася Черняк",
    profession: "UX/XUI Designer",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/humanYellow.png",
    name: "Вася Черняк",
    profession: "UX/XUI Designer",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/humanYellow.png",
    name: "Вася Черняк",
    profession: "UX/XUI Designer",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/humanYellow.png",
    name: "Вася Черняк",
    profession: "UX/XUI Designer",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/humanYellow.png",
    name: "Вася Черняк",
    profession: "UX/XUI Designer",
    telegram: "",
    instagram: "",
    facebook: "",
  },
];

const SocialMedia = ({ url, icon }) => (
  <a href={url}>
    <img src={icon} alt="" />
  </a>
);

const Telegram = (url) => (
  <SocialMedia url={url} icon="images/iconTelegram.png" />
);

const Facebook = (url) => (
  <SocialMedia url={url} icon="images/iconFacebook.png" />
);

const Instagram = (url) => <SocialMedia url={url} icon="images/iconInst.png" />;

export default function OurTeam() {
  return (
    <div id={styles.ourTeam}>
      <div className={styles["ourTeam_container"]}>
        <h1>НАША КОМАНДА</h1>
        <div className={styles.ourPeople}>
          {people.map((item, index) => (
            <div className={styles.human} key={index}>
              <div className={styles["human_img"]}>
                <img src={item.photo} alt="" />
                <div className={styles["hover"]}>
                  {item.telegram && <Telegram url={item.telegram} />}
                  {item.facebook && <Facebook url={item.facebook} />}
                  {item.instagram && <Instagram url={item.instagram} />}
                </div>
              </div>
              <div className={styles["human_desc"]}>
                <h3>{item.name}</h3>
                <p>{item.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
