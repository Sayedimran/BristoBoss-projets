import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slid1 from "../../../assets/home/slide1.jpg";
import slid2 from "../../../assets/home/slide2.jpg";
import slid3 from "../../../assets/home/slide3.jpg";
import slid4 from "../../../assets/home/slide4.jpg";
import slid5 from "../../../assets/home/slide5.jpg";
import banner2 from "../../../assets/home/chef-service.jpg";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div>
      <div className="my-5">
        <SectionTitle heading={"Form 11.00am to 10.00pm"} subHeading={"ORDER ONLINE"} />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24  "
      >
        <SwiperSlide>
          <img src={slid1} alt="" />
          <h3 className="text-4xl text-center uppercase -mt-16">Salad</h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid2} alt="" />
          <h3 className="text-4xl text-center uppercase -mt-16">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid3} alt="" />

          <h3 className="text-4xl text-center uppercase -mt-16">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid4} alt="" />
          <h3 className="text-4xl text-center uppercase -mt-16">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid5} alt="" />
          <h3 className="text-4xl text-center uppercase -mt-16">Salad</h3>
        </SwiperSlide>
      </Swiper>

      <div>
        <img className="lg:w-[800px] mx-auto rounded-lg" src={banner2} alt="" />
        <div className="lg:w-[500px] mx-auto -translate-y-55 p-7 rounded-lg bg-white opacity-80">
          <h1 className="text-4xl text-center text-black">Bistro Boss</h1>
          <p className=" text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
