import React, { useEffect } from "react";
import styles from "./OurTeam.module.scss";
import { useTrans } from "../../hooks/useTrans";




const SocialMedia = ({ url, icon }) => (
  <a href={url}>
    <img loading="lazy" src={icon} alt="" />
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

  const { trans } = useTrans();

  const people = [
    {
      photo: "images/Danil.png",
      name: useTrans().trans("Daniel_Bogatiuk"),
      profession: useTrans().trans("Daniel_Bogatiuk_spec"),
      telegram: "https://t-do.ru/@daniilbogatiuk",
      instagram: "https://www.instagram.com/daniil.bogatiuk/",
      facebook: "https://www.facebook.com/daniil.bogatiuk",
    },
    {
      photo: "images/VasulCherniak.png",
      name: trans("Vasyl_Cherniak"),
      profession: trans("Vasyl_Cherniak_spec"),
      telegram: "",
      instagram: "https://instagram.com/cherniakvasia?utm_medium=copy_link",
      facebook: "https://www.facebook.com/cherniakvasyl",
    },
    {
      photo: "images/TetianaVovk.png",
      name: trans("Tatiana_Vovk"),
      profession: trans("Tatiana_Vovk_spec"),
      telegram: "",
      instagram: "https://www.instagram.com/vo.taniusha/",
      facebook: "",
    },
    {
      photo: "images/Chrystya.png",
      name: trans("Krystyna_Tkachuk"),
      profession: trans("Krystyna_Tkachuk_spec"),
      telegram: "https://t-do.ru/@hrystichka",
      instagram: "https://instagram.com/hrystichka?utm_medium=copy_link",
      facebook: "https://www.facebook.com/profile.php?id=100017174077914",
    },
    {
      photo: "images/DariaTitarchuk.png",
      name: trans("Daria_Tytarchuk"),
      profession: trans("Daria_Tytarchuk_spec"),
      telegram: "https://t-do.ru/@dariatytarchuk",
      instagram: "https://instagram.com/dariatytarchuk?utm_medium=copy_link",
      facebook: "https://www.facebook.com/profile.php?id=100010570006326",
    },
    {
      photo: "images/Daniel.jpg",
      name: trans("Danylo_Dzhyzhula"),
      profession: trans("Danylo_Dzhyzhula_spec"),
      telegram: "https://t-do.ru/@danonedz",
      instagram: "https://instagram.com/danone.dz?utm_medium=copy_link",
      facebook: "",
    },
    {
      photo: "images/VeronikaDulishkovuch.png",
      name: trans("Veronika_Dulishkovych"),
      profession: trans("Veronika_Dulishkovych_spec"),
      telegram: "https://t-do.ru/@dveronika1807",
      instagram: "https://instagram.com/veronika.dulishkovych?utm_medium=copy_link",
      facebook: "https://www.facebook.com/veronika.dulishkovich",
    },
    {
      photo: "images/YuriyBurchak.png",
      name: trans("Yurii_Burchak"),
      profession: trans("Yurii_Burchak_spec"),
      telegram: "https://t-do.ru/@burchak1",
      instagram: "https://instagram.com/burchak1?utm_medium=copy_link",
      facebook: "https://www.facebook.com/mrburchak",
    },
    {
      photo: "images/JuliaN.png",
      name: trans("Julia_Nikitenko"),
      profession: trans("Julia_Nikitenko_spec"),
      telegram: "https://t-do.ru/@juliya_nikitenko",
      instagram: "",
      facebook: "https://www.facebook.com/NikitenkoJuliya",
    },
    {
      photo: "images/DianaSkorniakova.png",
      name: trans("Diana_Skorniakova"),
      profession: trans("Diana_Skorniakova_spec"),
      telegram: "https://t-do.ru/@Birdy_off_the_lens",
      instagram: "https://instagram.com/ce_prosto_di?utm_medium=copy_link",
      facebook: "https://www.facebook.com/diana.skorniakova",
    },
    {
      photo: "images/OlgaTusyk.png",
      name: trans("Helga_Tusyk"),
      profession: trans("Helga_Tusyk_spec"),
      telegram: "",
      instagram: "https://instagram.com/helga_tusyk?utm_medium=copy_link",
      facebook: "https://www.facebook.com/pryhodkoolia",
    },
    {
      photo: "images/SergiiRubak.png",
      name: trans("Sergii_Rubak"),
      profession: trans("Sergii_Rubak_spec"),
      telegram: "https://t-do.ru/@SerhiiRybak",
      instagram: "https://instagram.com/se_rybak?utm_medium=copy_link"
    },
    {
      photo: "images/SofiaPonomareva.png",
      name: trans("Sophie_Ponomariova"),
      profession: trans("Sophie_Ponomariova_spec"),
      telegram: "",
      instagram: "https://instagram.com/velveteen.rabbit1?utm_medium=copy_link",
      facebook: "https://www.facebook.com/sophie.ponomariova",
    },
    {
      photo: "images/Zoltan.png",
      name: trans("Zoltan_Jager"),
      profession: trans("Zoltan_Jager_spec"),
      telegram: "https://t-do.ru/@stton",
      instagram: "https://instagram.com/zoltan.i?utm_medium=copy_link",
      facebook: "https://www.facebook.com/profile.php?id=100002106721100",
    }
  ];

  return (
    <div id="ourTeam">
      <div className={styles["ourTeam_container"]}>
        <h1>{trans("our_team")}</h1>
        <div className={styles.ourPeople}>
          {people.map((item, index) => (
            <div className={styles.human} key={index}>
              <div className={styles["human_img"]}>
                <img loading="lazy" src={item.photo} alt="" />
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
