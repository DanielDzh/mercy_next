import React from "react";
import styles from "./OurTeam.module.scss";

const people = [
  {
    photo: "images/Danil.png",
    name: "Даниїл Богатюк",
    profession: "кофаундер",
    telegram: "https://t-do.ru/@daniilbogatiuk",
    instagram: "https://www.instagram.com/daniil.bogatiuk/",
    facebook: "example",
  },
  {
    photo: "images/VasulCherniak.png",
    name: "Вася Черняк",
    profession: "UX/XUI Designer",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/TetianaVovk.png",
    name: "Тетяна Вовк",
    profession: "СММ-менеджер",
    telegram: "example",
    instagram: "example",
    facebook: "example",
  },
  {
    photo: "images/MaksSigua.png",
    name: "Максим Сігуа",
    profession: "digital-маркетолог",
    telegram: "example",
    instagram: "example",
    facebook: "example",
  },
  {
    photo: "images/DariaTitarchuk.png",
    name: "Дар‘я Титарчук",
    profession: "SMM-спеціаліст",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/Daniel.jpg",
    name: "Даниїл Джижула",
    profession: "Розробник сайту",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/VeronikaDulishkovuch.png",
    name: "Вероніка Дулішкович",
    profession: "Адміністратор",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/YuriyBurchak.png",
    name: "Юрій Бурчак ",
    profession: "менеджер з маркетингу",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/JuliaN.png",
    name: "Юлія Нікітенко",
    profession: "SEO-спеціаліст",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/DianaSkorniakova.png",
    name: "Діана Скорнякова",
    profession: "Графічний дизайнер",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/OlgaTusyk.png",
    name: "Ольга Тусик",
    profession: "Сценарист",
    telegram: "",
    instagram: "",
    facebook: "",
  },
  {
    photo: "images/DavidPolohov.png",
    name: "Давид Полохов",
    profession: "Менеджер з логістики",
    telegram: "",
    instagram: "",
    facebook: "",
  }
];

const SocialMedia = ({ url, icon }) => (
  <a href={url}>
    <img src={icon} alt="" />
  </a>
);

const Telegram = ({ url }) => (
  <SocialMedia url={url} icon="images/iconTelegram.png" />
);

const Facebook = ({ url }) => (
  <SocialMedia url={url} icon="images/iconFacebook.png" />
);

const Instagram = ({ url }) => <SocialMedia url={url} icon="images/iconInst.png" />;

export default function OurTeam() {
  return (
    <div id="ourTeam">
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
