import useQueries from "../../../hooks/useQueries";
// import SingleQuery from "./SingleQuery";
// import useUsers from "../../../hooks/useUsers";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";


import SingleQuery from "./SingleQuery";


const UsersQueries = () => {
    const [query] = useQueries();
    // console.log('query',query);
    return (
        <div>
            <h2 className="text-3xl">{query.length}</h2>
            {/* <div className="">
            {
                query.slice(0, 3).map(item => <SingleQuery item={item} key={item._id}></SingleQuery> )
            }
            </div> */}

<Swiper
            slidesPerView={1}
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
            {query.slice(0,3).map((item) => (
              <SwiperSlide key={item._id}>
                {/* <ReviewCard review={review} /> */}
                <SingleQuery item={item}></SingleQuery>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    );
};

export default UsersQueries;