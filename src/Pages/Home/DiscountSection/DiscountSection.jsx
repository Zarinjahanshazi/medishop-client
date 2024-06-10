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
  })
  console.log('discounts medicine', discount)
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-3xl">{discount.length}</h2>
        {/* <div className="">
            {
                query.slice(0, 3).map(item => <SingleQuery item={item} key={item._id}></SingleQuery> )
            }
            </div> */}

        <Swiper
          slidesPerView={2}
          grid={{
            columns: 4,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {discount.map((item) => (
            <SwiperSlide key={item._id}>
              {/* <ReviewCard review={review} /> */}
              {/* <SingleQuery item={item}></SingleQuery> */}
              <SingleDiscount item={item}></SingleDiscount>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountSection;