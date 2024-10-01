import React from "react";

// Swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Slide1 from "../assets/images/slide1.jpg";
import Slide2 from "../assets/images/slide2.jpg";
import Slide3 from "../assets/images/slide3.jpg";
import Slide4 from "../assets/images/slide4.jpg";
import Slide5 from "../assets/images/slide5.jpg";

const BannerSlider = () => {
  return (
    <div className="w-full h-[56vh] my-0 mx-auto rounded-3xl mt-5">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src={Slide1}
            className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide2}
            className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide3}
            className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide4}
            className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide5}
            className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
