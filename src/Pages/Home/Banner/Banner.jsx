import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const imgArray = [
    {
        id: "1",
        bannerImg: img1
    },
    {
        id: "2",
        bannerImg: img2
    },
    {
        id: "3",
        bannerImg: img3
    },
]

const Banner = () => {
    const { data: bannarData = [], } = useQuery({
        queryKey: ['getAd'],
        queryFn: async () => {

            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/adSetBanner`);
            return res.data;

        }
    })
    const imgArrays = [...imgArray, ...bannarData]
    return (
        <div>
            <Carousel>
                {
                    imgArrays?.map((item, index) => (
                        <div key={index}>
                            <img src={item?.bannerImg} />
                        </div>
                    ))
                }
            </Carousel>

        </div>
    );
};

export default Banner;