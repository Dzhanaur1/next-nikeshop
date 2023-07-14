import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/pagination";
const ProductSlider = ({ images }) => {
  const productImages = images;
  console.log(images);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="slider product-slider">
        {productImages.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image} className="product-slider__img" alt="" />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default ProductSlider;
