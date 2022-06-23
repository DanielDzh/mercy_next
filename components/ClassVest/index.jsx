import React, { useState } from "react";
import styles from "./ClassVest.module.scss";
import { useTrans } from "../../hooks/useTrans";


const vests = [
  {
    rating: 3,
    vets_img: '/images/vestsClass/class_5.png',
    desc: 'Бронежилети 3 класу забезпечують захист від куль 5.45х39мм, куля 7Н6, вага 3.4гр, дистанція 10 метрів, швидкість польоту кулі близько 910 м/с. Також захищають від 7.62х39, куля 57-Н-231, вага кулі 7.9гр, дистанція 10 метрів зі швидкістю кулі близько 730 м/с.'
  },
  {
    rating: 4,
    vets_img: '/images/vestsClass/class_5.png',
    desc: 'Бронежилети 3 класу забезпечують захист від куль 5.45х39мм, куля 7Н6, вага 3.4гр, дистанція 10 метрів, швидкість польоту кулі близько 910 м/с. Також захищають від 7.62х39, куля 57-Н-231, вага кулі 7.9гр, дистанція 10 метрів зі швидкістю кулі близько 730 м/с.'
  },
  {
    rating: 5,
    vets_img: '/images/vestsClass/class_5.png',
    desc: 'Бронежилети 3 класу забезпечують захист від куль 5.45х39мм, куля 7Н6, вага 3.4гр, дистанція 10 метрів, швидкість польоту кулі близько 910 м/с. Також захищають від 7.62х39, куля 57-Н-231, вага кулі 7.9гр, дистанція 10 метрів зі швидкістю кулі близько 730 м/с.'
  }
]

const rating = [3, 4, 5];


export default function ClassVest() {

  const [active, setActive] = useState(3);

  const { trans } = useTrans();

  return (
    <div id={styles.levels}>
      <div className={styles["levels_of_dody_container"]}>
        <h1 className={styles["levels_of_dody_title"]}>
          <span>{trans('levels_of_dody_title')}</span>
          {trans('levels_of_dody_title_2')}
        </h1>

        <div className={styles["levels_of_dody_body"]}>
          <div className={styles["images_vest"]}>
            {
              vests.map((item, index) =>
              (
                item.rating === active ?
                  <>
                    <div className={styles["images_vest_rating"]}>
                      {[...new Array(item.rating)].map((x, rowIndex) => (
                        <div className={styles["images_vest_rating_img"]}>
                          <img src="images/vestsClass/Vector.png" alt="" key={rowIndex} />
                        </div>
                      ))}
                    </div>

                    <div className={styles["image_vest"]}>
                      <img src={item.vets_img} alt="" />
                    </div>
                  </>
                  :
                  <></>
              )
              )
            }
          </div>

          <div className={styles["vest_choice_and_desc"]}>
            <div className={styles["vest_choices"]}>
              {
                rating.map((item, index) => (
                  <div className={styles["vest_choice"]} onClick={() => setActive(item)} key={index} style={{ borderColor: item === active && '#FFBC15' }}>
                    <p style={{ color: item === active && '#fff' }}>
                      Клас {item}:
                    </p>
                  </div>
                ))
              }
            </div>
            <div className={styles["vest_desc"]}>
              {
                vests.map((item, index) => (
                  item.rating === active &&
                  <p key={index}>
                    {item.desc}
                  </p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
