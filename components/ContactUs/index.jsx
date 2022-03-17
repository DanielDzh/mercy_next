import React from "react";
import ButtonBlue from "../ButtonBlue";
import styles from "./ContactUs.module.scss";
import { useTrans } from "../../hooks/useTrans";

const contacts = [
   {
      icon: "images/iconPhone.png",
      name: "phone",
      url: "",
      desc: "(684) 555-0102",
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
   {
      icon: "images/iconLocation.png",
      name: "location",
      url: "",
      desc: "8502 Preston Rd. Inglewood, Maine 98380",
   },
];

const ContactUs = () => {
   const { trans } = useTrans();

   return (
      <div id="contactUs">
         <div className={styles["contactUs_container"]}>
            <div className={styles["contactUs_block"]}>
               <h1 className={styles["contactUs_title"]}>{trans("contacts")}</h1>
               <div className={styles["contactUs_content"]}>
                  <div className={styles["ourContacts"]}>
                     {contacts.map((item) => (
                        <div key={item.name} className={styles["contacts_wrapper"]}>
                           <a href={item.url && item.url}>
                              <img src={item.icon} alt="" />
                              <h3>{item.desc}</h3>
                           </a>
                        </div>
                     ))}
                  </div>
                  <div className={styles["form_wrapper"]}>
                     <form action="" type="POST">
                        <div className={styles["data_user"]}>
                           <input
                              type="text"
                              placeholder={trans("contacts_name")}
                              className={styles["user_name"]}
                           />
                           <input
                              type="text"
                              placeholder={trans("contacts_phone")}
                              className={styles["user_phone"]}
                           />
                        </div>
                        <div className={styles["quetion_user"]}>
                           <input
                              type="text"
                              placeholder={trans("contacts_mail")}
                              className={styles["user_mail"]}
                           />
                           <textarea rows="4" type="" placeholder={trans("contacts_message")} />
                        </div>
                        <button>
                           <ButtonBlue title={trans("button_send")} />
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
