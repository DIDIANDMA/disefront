import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SliderCard from "../SliderCard/SliderCard";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MainCarousel.css";

const MainCarousel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    axios
      .get("data/mainProduct/mainProduct.json")
      .then(res => {
        if (res) {
          setIsLoading(true);
          setMainData(res.data);
        }
      })
      .catch(e => console.log(e));
  }, []);

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
      {isLoading &&
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
