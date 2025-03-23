import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

function Carousel({ setSelectedContent }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: () => {
      // Limpia el contenido seleccionado cuando se cambia de slide
      setSelectedContent("");
    }
  };

  return (
    <Slider {...settings}>
      <div><AboutMe /></div>
      <div><Education setSelectedContent={setSelectedContent} /></div>
      <div><Experience setSelectedContent={setSelectedContent} /></div>
      <div><Skills /></div>
    </Slider>
  );
}

// ✅ Validar que setSelectedContent es una función requerida
Carousel.propTypes = {
  setSelectedContent: PropTypes.func.isRequired,
};

export default Carousel;