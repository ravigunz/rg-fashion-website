import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SingleProductImage from "./imageSlider/SingleProductImage";
// https://radikadilanka.com/rdfashion/static/media/product114.ee344b70.jpg

export default function ImageSlider({ images }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >
      {images.map((val, key) => {
        return (
          <SwiperSlide key={key}>
            <SingleProductImage watchImg300={val} watchImg1200={val} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
