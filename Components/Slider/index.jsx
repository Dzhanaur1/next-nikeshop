import SliderItem from "./SliderItem";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const MainSlider = ({ slides }) => {
  const sliderSlides = slides;

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
      }}
      slidesPerView={1.5}
      navigation={{
        nextEl: ".next-btn", // элемент для переключения на следующий слайд
        prevEl: ".next-btn",
        clickable: true,
      }}
    >
      <div className="slider__wrapper">
        <h3 className="slider__title">Best of&nbsp;Air Max</h3>
        <div className="slider-btns slider-controler ">
          <button className="back-btn " />
          <button className="next-btn" />
        </div>
      </div>

      <div className="slider product-slider">
        {sliderSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <SliderItem {...slide} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default MainSlider;
