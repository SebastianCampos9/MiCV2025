import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


function Carousel() {
  const settings = {
    dots: true, // Muestra los indicadores de página
    infinite: true, // Se repite en bucle
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Muestra una sección a la vez
    slidesToScroll: 1, // Avanza de una en una
    arrows: true, // Botones de navegación
  };

  return (
    <Slider {...settings}>
      <div><AboutMe /></div>
      <div><Education /></div>
      <div><Experience /></div>
      <div><Skills /></div>
    </Slider>
  );
}

export default Carousel;
