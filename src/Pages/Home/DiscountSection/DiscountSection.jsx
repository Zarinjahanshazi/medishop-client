import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import SingleDiscount from "./SingleDiscount";

const DiscountSection = () => {
  const axiosPublic = useAxiosPublic();

  const { data: discount = [], isPending: loading, refetch } = useQuery({
    queryKey: ['discount'],
    queryFn: async () => {
      const res = await axiosPublic.get('/discounts');
      return res.data;
    }
  });

  console.log('discounts medicine', discount);

  return (
    <div className="mt-10">
      <div className="">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Grid, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              grid: { rows: 1 },
            },
            640: {
              slidesPerView: 1,
              grid: { rows: 1 },
            },
            768: {
              slidesPerView: 2,
              grid: { rows: 1 },
            },
            1024: {
              slidesPerView: 2,
              grid: { rows: 1 },
            },
          }}
        >
          {discount.map((item) => (
            <SwiperSlide key={item._id}>
              <SingleDiscount item={item}></SingleDiscount>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountSection;
