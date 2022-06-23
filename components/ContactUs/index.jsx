import Image from "next/image";
import React, { useState } from "react";
import { useTrans } from "../../hooks/useTrans";
import { Api } from "../../services/api";
import { generateClasses } from "../../utils/generateClassName";
import styles from "./ContactUs.module.scss";
import ContactForm from "./Form";

const contacts = [
  {
    icon: "images/iconLocation.png",
    name: "location",
    url: "",
    desc: "Kresánkova 3581/7B, 84105 Bratislava Slovakia",
  },
  {
    icon: "images/iconPhone.png",
    name: "phone",
    url: "",
    desc: "+421948143899",
  },
  {
    icon: "images/iconMail.png",
    name: "mail",
    url: "mailto:support@mercychain.org",
    desc: "support@mercychain.org",
  },
  // {
  //    icon: "images/iconInstYellow.png",
  //    name: "instagram",
  //    url: "https://www.instagram.com/mercy_chain",
  //    desc: "@mercy_chain",
  // },
  // {
  //    icon: "images/iconTelegramYellow.png",
  //    name: "telegram",
  //    url: "",
  //    desc: "(684) 555-0102",
  // },
];

const ContactUs = () => {
  const { trans } = useTrans();
  const [success, setSucess] = useState(false);
  const onSubmit = (form) => {
    Api.post("/support", form).then(() => setSucess(true));
    console.log(form);

  }

  return (
    <div id="contactUs">
      <div className={styles["contactUs_container"]}>
        <div className={styles["ourContacts"]}>
          <h1 className={styles["ourContacts_h1"]}>
            Контакти
          </h1>
          {contacts.map((item) => (
            <div key={item.name} className={styles["contacts_wrapper"]}>
              <a href={item.url && item.url}>
                <img loading="lazy" src={item.icon} alt="" />
                <h3>
                  <h3>{item.desc}</h3>
                </h3>
              </a>
            </div>
          ))}
          <span className={styles["ourContacts_span"]}></span>
          <h2 className={styles["ourContacts_h2"]}>
            Слідкуй за нашою роботою
          </h2>
          <div className={styles["ourContacts_social"]}>
            <a href="">
              <img src="images/iconInstYellow.png" alt="" />
            </a>
            <a href="">
              <img src="images/iconFacebookYellow.png" alt="" />
            </a>
          </div>
        </div>
        <div className={styles["contactUs_block"]}>
          {/* <h1 className={styles["contactUs_title"]}>{trans("contacts")}</h1> */}
          <div className={styles["contactUs_block_img"]}>
            <img src="images/contactUs.png" alt="" />
          </div>
          <div className={styles["contactUs_content"]}>

            {success ? (
              <div
                className={generateClasses(
                  styles.form_wrapper,
                  styles.successBlock
                )}
              >
                <h3 className={styles.successTitle}>{trans("email-sent")}</h3>
                <Image
                  src="/images/Vector.png"
                  width={60}
                  height={60}
                  layout="fixed"
                  alt="check"
                />
                <span
                  className={styles.anotherEmail}
                  onClick={() => setSucess(false)}
                >
                  {trans("send-another-email")}
                </span>
              </div>
            ) : (
              <div className={styles["form_title"]}>
                <h1>Форма зворотнього зв’язку</h1>
                <ContactForm onSubmit={onSubmit} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
