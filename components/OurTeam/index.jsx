import React from "react";
import styles from "./OurTeam.module.scss";
import { useTrans } from "../../hooks/useTrans";

const people = [
  {
    photo: "images/Danil.png",
    name: "Даниїл Богатюк",
    profession: "кофаундер",
    telegram: "https://t-do.ru/@daniilbogatiuk",
    instagram: "https://www.instagram.com/daniil.bogatiuk/",
    facebook: "https://www.facebook.com/daniil.bogatiuk",
  },
  {
    photo: "images/VasulCherniak.png",
    name: "Вася Черняк",
    profession: "UX/XUI Designer",
    telegram: "",
    instagram: "https://instagram.com/cherniakvasia?utm_medium=copy_link",
    facebook: "https://www.facebook.com/cherniakvasyl",
  },
  {
    photo: "images/TetianaVovk.png",
    name: "Тетяна Вовк",
    profession: "СММ-менеджер",
    telegram: "",
    instagram: "https://www.instagram.com/vo.taniusha/",
    facebook: "",
  },
  {
    photo: "images/MaksSigua.png",
    name: "Максим Сігуа",
    profession: "digital-маркетолог",
    telegram: "https://t-do.ru/@TargetMediaG",
    instagram: "https://instagram.com/max.sihua?utm_medium=copy_link",
    facebook: "https://www.facebook.com/max.sihua",
  },
  {
    photo: "images/DariaTitarchuk.png",
    name: "Дар‘я Титарчук",
    profession: "SMM-спеціаліст",
    telegram: "https://t-do.ru/@dariatytarchuk",
    instagram: "https://instagram.com/dariatytarchuk?utm_medium=copy_link",
    facebook: "https://www.facebook.com/profile.php?id=100010570006326",
  },
  {
    photo: "images/Daniel.jpg",
    name: "Даниїл Джижула",
    profession: "Розробник сайту",
    telegram: "https://t-do.ru/@danonedz",
    instagram: "https://instagram.com/danone.dz?utm_medium=copy_link",
    facebook: "",
  },
  {
    photo: "images/VeronikaDulishkovuch.png",
    name: "Вероніка Дулішкович",
    profession: "Адміністратор",
    telegram: "https://t-do.ru/@dveronika1807",
    instagram: "https://instagram.com/veronika.dulishkovych?utm_medium=copy_link",
    facebook: "https://www.facebook.com/veronika.dulishkovich",
  },
  {
    photo: "images/YuriyBurchak.png",
    name: "Юрій Бурчак ",
    profession: "менеджер з маркетингу",
    telegram: "https://t-do.ru/@burchak1",
    instagram: "https://instagram.com/burchak1?utm_medium=copy_link",
    facebook: "https://www.facebook.com/mrburchak",
  },
  {
    photo: "images/JuliaN.png",
    name: "Юлія Нікітенко",
    profession: "SEO-спеціаліст",
    telegram: "https://t-do.ru/@juliya_nikitenko",
    instagram: "",
    facebook: "https://www.facebook.com/NikitenkoJuliya",
  },
  {
    photo: "images/DianaSkorniakova.png",
    name: "Діана Скорнякова",
    profession: "Графічний дизайнер",
    telegram: "https://t-do.ru/@Birdy_off_the_lens",
    instagram: "https://instagram.com/ce_prosto_di?utm_medium=copy_link",
    facebook: "https://www.facebook.com/diana.skorniakova",
  },
  {
    photo: "images/OlgaTusyk.png",
    name: "Ольга Тусик",
    profession: "Сценарист",
    telegram: "",
    instagram: "https://instagram.com/helga_tusyk?utm_medium=copy_link",
    facebook: "https://www.facebook.com/pryhodkoolia",
  },
  {
    photo: "images/DavidPolohov.png",
    name: "Давид Полохов",
    profession: "Менеджер з логістики",
    telegram: "https://t-do.ru/@Maksimalniy",
    instagram: "https://instagram.com/david_polokhov?utm_medium=copy_link",
    facebook: "https://www.facebook.com/profile.php?id=100006714226042",
  },
  {
    photo: "images/SofiaPonomareva.png",
    name: "Софія Пономарьова",
    profession: "Копірайтер, перекладач",
    telegram: "",
    instagram: "https://instagram.com/velveteen.rabbit1?utm_medium=copy_link",
    facebook: "https://www.facebook.com/sophie.ponomariova",
  },
  {
    photo: "images/Zoltan.png",
    name: "Золтан Ягер",
    profession: "Фахівець із закупівель",
    telegram: "https://t-do.ru/@stton",
    instagram: "https://instagram.com/zoltan.i?utm_medium=copy_link",
    facebook: "https://www.facebook.com/profile.php?id=100002106721100",
  },
  {
    photo: "images/Chrystya.png",
    name: "Христина Ткачук",
    profession: "SMM-спеціаліст",
    telegram: "https://t-do.ru/@hrystichka",
    instagram: "https://instagram.com/hrystichka?utm_medium=copy_link",
    facebook: "https://www.facebook.com/profile.php?id=100017174077914",
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

  const { trans } = useTrans()

  return (
    <div id="ourTeam">
      <div className={styles["ourTeam_container"]}>
        <h1>{trans("our_team")}</h1>
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
