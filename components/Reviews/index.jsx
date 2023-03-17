import React from "react";
import Slider from "react-slick";
import styles from "./Reviews.module.scss";
import { useTrans } from "../../hooks/useTrans";
import { SamplePrevArrow } from "../SlickSlider/SamplePrevArrow/SamplePrevArrow";
import { SampleNextArrow } from "../SlickSlider/SampleNextArrow/SampleNextArrow";

const sliderPaths = [
  {
    id: 1,
    desc: 'Дякую вам велике за гуманітарну допомогу,яку ви надали нам! Вона була вчасною для моєї сім\' ї.В мене 6 діток і ми дуже вдячні вам за продукти!',
    author: 'Наталія, м.Суми'
  },
  {
    id: 2,
    desc: 'Ваша допомога стала великою підтримкою для мене і сина. Через постійні обстріли, ми вимушені були переселитися в Сумську область з Миколаєва. Але завдяки вашим зусиллям, наша адаптація стала легшою.',
    author: 'Оксана, м.Ромни'
  },
  {
    id: 4,
    desc: 'Я приїхала до міста Запоріжжя з міста Щастя Луганської області, яке наразі окуповане. Дуже хотіла б повернутись додому. Дякую вам за допомогу!',
    author: 'Вікторія, м. 3апоріжжя'
  },
  {
    id: 5,
    desc: 'Висловлюємо велику подяку фонду Mercy Chain за допомогу. Зі мною проживає моя донька Вікторія, вона інвалід з дитинства (глухоніма, з психоневрологічними відхиленнями). Минулий рік був дуже важкий для нашої сім\'ї війна, окупація, втрата нашого батька і чоловіка, я втратила роботу, тому ваша допомога дуже вчасна і необхідна. Ми вдячні вам, бережи вас Бог.',
    author: 'Світлана, м. Херсон'
  },
  {
    id: 3,
    desc: 'Після початку російської війни на території України, мій син втратив роботу, а в мене пенсія невелика. Через село, в якому я живу, пройшло кількасот російських танків, постраждали мирні люди. Район був окупований, і досі багато людей не можуть знайти собі роботу, бо її просто немає. Продукти, що ви дали, дуже допомогли мені і сину. Дякуємо вам!',
    author: 'Ганна, м. Ромни'
  },
  {
    id: 6,
    desc: 'Хочу дуже подякувати фонду за те, що надали нашій родині гуманітарну допомогу у вигляді продуктового набору. Вона була для нашої сім\' ї вчасною.',
    author: 'Наталія, м. Суми'
  },
  {
    id: 7,
    desc: 'Дякуємо за продуктові набори, це гарна допомога у ці скрутні часи та гарна підтримка для багатодітних сімей як ми!',
    author: 'Сім\' я із м. Зеленодольськ'
  },
  {
    id: 8,
    desc: 'Ми дуже вдячні вам та благодійному фонду Mercy Chain за продуктову допомогу. Ми з Харкова, я інвалід-ліквідатор ЧАЕС, жінка пенсіонерка. Для нас це дуже велика допомога. Нехай Господь благословить вас та фонд за ваш труд та допомогу у потребах інших людей!',
    author: 'Сім\' я з Харкова'
  },
  {
    id: 9,
    desc: 'Ми, маленька родина, я і мій син. Велика подяка БФ Mercy Chain за допомогу. Ви робите дуже гарну справу. Допомога людям, які страждають від війни. Ми з сином дуже вдячні вам за допомогу.',
    author: 'Наталія, м. Слов\' янськ'
  },
  {
    id: 10,
    desc: 'Отримала продуктовий набір. Дуже дякую вам за допомогу! Дякую БФ Mercy Chain за зусилля, підтримку та вкладений час. Неймовірно приємно та радісно усвідомлювати, що завжди поряд є ті, хто щиро готовий допомогти! Миру вам та вашим сім\' ям!',
    author: 'Оксана, м. Слов\' янськ'
  },
];
export default function Reviews() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 300,
    arrows: false,
    dots: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
        }
      },
    ],
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const {trans} = useTrans();

  return (
    <div id="Reviews">
      <div className={styles["reviews_container"]}>
        <h1 className={styles["reviews_title"]}>
          {trans("reviews_title")}
        </h1>
        <div className={styles["reviews_slider"]}>
          <Slider {...settings}>
            {sliderPaths.map((review, index) => (
              <div className={styles["slider_wrapp"]} key={index + 1}>
                <div className='slider_content'>
                  <p>{review.desc}</p>
                  <h6>{review.author}</h6>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
