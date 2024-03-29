import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTrans } from "../../hooks/useTrans";

import styles from "./VideoBlock.module.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function VideoBlock() {
  const [visibleVideo, setVisibleVideo] = useState(false);
  const router = useRouter()
  const currentLang = router.locale

  useEffect(() => {

    visibleVideo ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  }, [visibleVideo])

  const { trans } = useTrans();

  return (
    <div id="">
      <div className={styles["video_block_container"]}>
        <div className={styles["video_block_wrapper"]}>
          <div className={styles["video_text"]}>
            <h1 className={styles["text_h1_white"]}>
              {trans("how_is_work")}
            </h1>
            <h1 className={styles["text_h1_yellow"]}>
              Mercy Chain
            </h1>
            <p className={styles["text_p"]}>
              {trans("watching_video")}
            </p>
          </div>
          <div className={styles["video_image_wrapper"]}
               style={{ background: `url("images/backVideo.png") no-repeat 100% 100%/contain` }}>
            <img className={styles["image_video"]} src={"images/video-poster.jpg"} alt="" />
            <img className={styles["button_play"]} src={"images/buttonPlay.png"} alt=""
                 onClick={() => setVisibleVideo(true)} />
          </div>

        </div>
        {visibleVideo ?
          <div className={styles["video_container"]}>
            <div className={styles["close_video"]} onClick={() => setVisibleVideo(false)}></div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              slideToClickedSlide={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <iframe width="560"
                        height="315"
                        className={styles.video}
                        src={`https://www.youtube.com/embed/SVJlVQOfqXw?&cc_lang_pref=${currentLang === 'en' ? 'en' : 'uk'};cc_load_policy=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
              </SwiperSlide>
              <SwiperSlide>
                <iframe width="560"
                        height="415"
                        className={styles.video}
                        src={`https://www.youtube.com/embed/Z6oAxqEjzjs?&cc_lang_pref=${currentLang === 'en' ? 'en' : 'uk'};cc_load_policy=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
              </SwiperSlide>
              <SwiperSlide>
                <iframe width="560"
                        height="315"
                        className={styles.video}
                        src="https://www.youtube.com/embed/rZEc3xAGkP8?si=FDwVW63Y9ui0LXIa"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
              </SwiperSlide>
            </Swiper>
          </div>
          : ""}
      </div>
    </div>
  );
}
