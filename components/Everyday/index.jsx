import React, { useEffect, useState } from "react";
import styles from "./Everyday.module.scss";
import { useTrans } from "../../hooks/useTrans";
import { Link } from "react-scroll";
import ButtonBlue from "../ButtonBlue";

export default function Everyday() {

   const { trans } = useTrans();

   return (
      <div id="everyday">
         <div className={styles["everyday_container"]}>
            <div className={styles["everyday_images_block"]}>
               <img src="images/everyday.png" alt="" />
            </div>
            <div className={styles["everyday_desc"]}>
               <h1>
                  <span>300</span>
                  <span>{trans("everyday_title")}</span>
               </h1>
               <p>{trans("everyday_desc_1")}</p>
               <p>{trans("everyday_desc_2")}</p>
               <Link
                  className={styles["link"]}
                  to="details"
                  smooth={true}
                  duration={2000}
                  activeClass="active"
                  spy={false}
                  offset={5}
               >
                  <ButtonBlue title={trans("slider_button_blue")} />
               </Link>
            </div>
         </div>
      </div>
   );
}
