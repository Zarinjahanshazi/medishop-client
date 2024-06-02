import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 import img1 from '../../../assets/1.jpg'
 import img2 from '../../../assets/2.jpg'
 import img3 from '../../../assets/3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img  src={img1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img  src={img2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img  src={img3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            
        </div>
    );
};

export default Banner;