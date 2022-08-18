import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SliderCard from "../SliderCard/SliderCard";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./MainCarousel.css";

const MainCarousel = ({ mainData }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={50}
      slidesPerGroup={4}
      loop={false}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {mainData &&
        mainData.map(item => {
          const { id, name } = item;
          return (
            <SwiperSlide key={name} className=" w-8  ">
              <SliderCard item={item} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default MainCarousel;
