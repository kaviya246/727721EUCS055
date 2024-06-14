import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/ImageCarousel.css';
import carousel1 from '../assets/images/f1.jpg';
import carousel2 from '../assets/images/f2.webp';
import carousel3 from '../assets/images/f3.jpeg';

const Foodslide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        <div>
          <img src={carousel1} alt="Image 1" />
        </div>
        <div>
          <img src={carousel3} alt="Image 3" />
        </div>
        <div>
          <img src={carousel2} alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
};

export default Foodslide;
