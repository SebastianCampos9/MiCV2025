import "./App.css";
import { FaLinkedin, FaGithub, FaGoogle, FaWhatsapp } from "react-icons/fa";
import foto from "./assets/images/Diseño sin título (5).png";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img src={foto} alt="Foto del curriculum vitae" className="header-img" />
        <h2 className="titulo" >Sebastian Campos</h2>
      </div>
      <div className="header-right">
        <a href="mailto:sebacampos1996@gmail.com" className="contact-icon">
          <FaGoogle />
        </a>
        <a href="mailto:sebacampos1996@gmail.com" className="contact-icon">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-campos-haedo/" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/SebastianCampos9" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
