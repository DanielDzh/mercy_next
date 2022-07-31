import React, { useState } from "react";
import styles from "./OurTeam.module.scss";
import { useTrans } from "../../hooks/useTrans";
import ButtonBlue from "../ButtonBlue";
import PopupWithTitle from "../common/PopupWithTitle";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";


const SocialMedia = ({url, icon}) => (
  <a target='_blank' href={url}>
    <img loading="lazy" src={icon} alt="" />
  </a>
);

const Telegram = ({url}) => (
  <SocialMedia target='_blank' url={url} icon="images/iconTelegram.png" />
);

const Facebook = ({url}) => (
  <SocialMedia target='_blank' url={url} icon="images/iconFacebook.png" />
);

const Instagram = ({url}) => <SocialMedia url={url} icon="images/iconInst.png" />;

export default function OurTeam() {
  const {open, onOpen, onClose} = useOpenHandlers(false);
  const [activeTab, setActiveTab] = useState(1);

  const {trans} = useTrans();

  const people = [
    {
      photo: "images/Danil.png",
      name: useTrans().trans("Daniel_Bogatiuk"),
      profession: useTrans().trans("Daniel_Bogatiuk_spec"),
      telegram: "https://t-do.ru/@daniilbogatiuk",
      instagram: "https://www.instagram.com/daniil.bogatiuk/",
      facebook: "https://www.facebook.com/daniil.bogatiuk",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/team-2.png",
      name: useTrans().trans("Yurii_Kavun"),
      profession: useTrans().trans("Yurii_Kavun_spec"),
      telegram: "https://t-do.ru/@daniilbogatiuk",
      instagram: "https://www.instagram.com/daniil.bogatiuk/",
      facebook: "https://www.facebook.com/daniil.bogatiuk",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/VasulCherniak.png",
      name: trans("Vasyl_Cherniak"),
      profession: trans("Vasyl_Cherniak_spec"),
      telegram: "",
      instagram: "https://instagram.com/cherniakvasia?utm_medium=copy_link",
      facebook: "https://www.facebook.com/cherniakvasyl",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/HaidukTetiana.png",
      name: trans("Haiduk_Tetiana"),
      profession: trans("Haiduk_Tetiana_spec"),
      telegram: "https://t-do.ru/@tania_haiduk",
      instagram: "https://www.instagram.com/tanya.gaiduk/?hl=ru",
      facebook: "https://www.facebook.com/profile.php?id=100012549618008",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/DariaTitarchuk.png",
      name: trans("Daria_Tytarchuk"),
      profession: trans("Daria_Tytarchuk_spec"),
      telegram: "https://t-do.ru/@dariatytarchuk",
      instagram: "https://instagram.com/dariatytarchuk?utm_medium=copy_link",
      facebook: "https://www.facebook.com/profile.php?id=100010570006326",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/team-3.png",
      name: useTrans().trans("Melnyk_Mykola"),
      profession: useTrans().trans("Melnyk_Mykola_spec"),
      telegram: "",
      instagram: "https://www.instagram.com/mykola.melnyk_",
      facebook: "https://www.facebook.com/MykolaVitaliyovych",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/YuriyBurchak.png",
      name: trans("Yurii_Burchak"),
      profession: trans("Yurii_Burchak_spec"),
      telegram: "https://t-do.ru/@burchak1",
      instagram: "https://instagram.com/burchak1?utm_medium=copy_link",
      facebook: "https://www.facebook.com/mrburchak",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/team-1.png",
      name: useTrans().trans("Volodymyr_Pustovit"),
      profession: useTrans().trans("Volodymyr_Pustovit_spec"),
      telegram: "https://t-do.ru/@daniilbogatiuk",
      instagram: "https://www.instagram.com/daniil.bogatiuk/",
      facebook: "https://www.facebook.com/daniil.bogatiuk",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/DianaErenshtein.png",
      name: trans("Diana_Erenshtein"),
      profession: trans("Diana_Erenshtein_spec"),
      telegram: "",
      instagram: "https://www.instagram.com/diana.erstn/",
      facebook: "https://www.facebook.com/diana.erstn",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/SergiiRubak.png",
      name: trans("Sergii_Rubak"),
      profession: trans("Sergii_Rubak_spec"),
      telegram: "https://t-do.ru/@SerhiiRybak",
      instagram: "https://instagram.com/se_rybak?utm_medium=copy_link",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/OlgaTusyk.png",
      name: trans("Helga_Tusyk"),
      profession: trans("Helga_Tusyk_spec"),
      telegram: "",
      instagram: "https://instagram.com/helga_tusyk?utm_medium=copy_link",
      facebook: "https://www.facebook.com/pryhodkoolia",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/Daniel.jpg",
      name: trans("Danylo_Dzhyzhula"),
      profession: trans("Danylo_Dzhyzhula_spec"),
      telegram: "https://t-do.ru/@danonedz",
      instagram: "https://instagram.com/danone.dz?utm_medium=copy_link",
      facebook: "",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/VeronikaDulishkovuch.png",
      name: trans("Veronika_Dulishkovych"),
      profession: trans("Veronika_Dulishkovych_spec"),
      telegram: "https://t-do.ru/@dveronika1807",
      instagram: "https://instagram.com/veronika.dulishkovych?utm_medium=copy_link",
      facebook: "https://www.facebook.com/veronika.dulishkovich",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/Zoltan.png",
      name: trans("Zoltan_Jager"),
      profession: trans("Zoltan_Jager_spec"),
      telegram: "https://t-do.ru/@stton",
      instagram: "https://instagram.com/zoltan.i?utm_medium=copy_link",
      facebook: "https://www.facebook.com/profile.php?id=100002106721100",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/SofiaPonomareva.png",
      name: trans("Sophie_Ponomariova"),
      profession: trans("Sophie_Ponomariova_spec"),
      telegram: "",
      instagram: "https://instagram.com/velveteen.rabbit1?utm_medium=copy_link",
      facebook: "https://www.facebook.com/sophie.ponomariova",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/JuliaN.png",
      name: trans("Julia_Nikitenko"),
      profession: trans("Julia_Nikitenko_spec"),
      telegram: "https://t-do.ru/@juliya_nikitenko",
      instagram: "",
      facebook: "https://www.facebook.com/NikitenkoJuliya",
      period: `${trans("team_period")} 2022`,
      active: true,
    },
    {
      photo: "images/Chrystya.png",
      name: trans("Krystyna_Tkachuk"),
      profession: trans("Krystyna_Tkachuk_spec"),
      telegram: "https://t-do.ru/@hrystichka",
      instagram: "https://instagram.com/hrystichka?utm_medium=copy_link",
      facebook: "https://www.facebook.com/profile.php?id=100017174077914",
      period: `${trans("team_period")} 2022-2022`,
      active: false,
    },
    {
      photo: "images/DianaSkorniakova.png",
      name: trans("Diana_Skorniakova"),
      profession: trans("Diana_Skorniakova_spec"),
      telegram: "https://t-do.ru/@Birdy_off_the_lens",
      instagram: "https://instagram.com/ce_prosto_di?utm_medium=copy_link",
      facebook: "https://www.facebook.com/diana.skorniakova",
      period: `${trans("team_period")} 2022`,
      active: false,
    },
  ];

  const TeamItem = ({item}) => {
    return (<div className={styles.human}>
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
        <p className={styles["period"]}>{item.period}</p>
      </div>
    </div>)
  }
  return (
    <div id="ourTeam">
      <div className={styles["ourTeam_container"]}>
        <h1>{trans("our_team")}</h1>
        <div className={styles.ourPeople}>
          {people.slice(0, 12).map((item, index) => (
            <TeamItem key={index} item={item} />
          ))}
        </div>
        <div className={styles["human_button"]}>
          <ButtonBlue title={trans("all_team")} click={onOpen} />
        </div>
      </div>
      <PopupWithTitle className={styles["human_popup"]} title={trans("all_team")} open={open} onClose={onClose}>
        <ul className={styles["human_popup_tabs"]}>
          <li onClick={() => setActiveTab(1)} className={activeTab === 1 && styles["human_popup_tab_active"]}>
            <ButtonBlue title={trans("serve")} />
          </li>
          <li onClick={() => setActiveTab(2)} className={activeTab === 2 && styles["human_popup_tab_active"]}>
            <ButtonBlue title={trans("served")} />
          </li>
          <li onClick={() => setActiveTab(3)} className={activeTab === 3 && styles["human_popup_tab_active"]}>
            <ButtonBlue title={trans("all")} />
          </li>
        </ul>
        <div className={styles["human_popup_tabs"]}>
          <div className={styles["human_popup_content"]}>
            {activeTab === 1 && people.map((item, index) => {
              if (item.active === true) return <TeamItem key={index} item={item} />
            })}
            {activeTab === 3 && <>
              {people.map((item, index) => {
                if (item.active === true) return <TeamItem key={index} item={item} />
              })}
              <div className={styles["human_popup_line"]} />
              {people.map((item, index) => {
                if (item.active !== true) return <TeamItem key={index} item={item} />
              })}}
            </>}
            {activeTab === 2 && people.map((item, index) => {
              if (item.active !== true) return <TeamItem key={index} item={item} />
            })}
          </div>
        </div>
      </PopupWithTitle>
    </div>
  );
}
