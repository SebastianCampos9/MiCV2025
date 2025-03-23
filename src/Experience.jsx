// Experience.jsx
import PropTypes from "prop-types";

function Experience({ setSelectedContent }) {
  // Define los datos de experiencia directamente en el componente
  const experienceData = {
    "Fatties SAS": {
      title: "Fatties SAS",
      position: "Desarrollador Frontend",
      period: "2020 - 2022",
      description: "Trabajé en el desarrollo de aplicaciones web utilizando React y otras tecnologías modernas de frontend.",
      responsibilities: [
        "Desarrollo de interfaces de usuario",
        "Implementación de nuevas funcionalidades",
        "Optimización de rendimiento"
      ]
    },
    "Gold Clean": {
      title: "Gold Clean",
      position: "Desarrollador Web",
      period: "2019 - 2020",
      description: "Desarrollé y mantuve sitios web corporativos.",
      responsibilities: [
        "Mantenimiento del sitio web",
        "Implementación de diseños responsivos",
        "Optimización SEO"
      ]
    },
    "Cotilloneria LIP": {
      title: "Cotilloneria LIP",
      position: "Diseñador Web",
      period: "2018 - 2019",
      description: "Creé y mantuve el sitio web de e-commerce de la empresa.",
      responsibilities: [
        "Diseño de interfaces",
        "Mantenimiento de la plataforma e-commerce",
        "Optimización de conversiones"
      ]
    },
    "Burger King": {
      title: "Burger King",
      position: "Asistente de TI",
      period: "2017 - 2018",
      description: "Participé en el mantenimiento de sistemas informáticos y brindé soporte técnico.",
      responsibilities: [
        "Soporte técnico",
        "Mantenimiento de equipos",
        "Resolución de incidencias"
      ]
    },
    "Nestlé": {
      title: "Nestlé",
      position: "Pasante de Desarrollo",
      period: "2016 - 2017",
      description: "Realicé prácticas profesionales colaborando en proyectos internos.",
      responsibilities: [
        "Desarrollo de aplicaciones internas",
        "Pruebas de software",
        "Documentación técnica"
      ]
    }
  };

  // Función que maneja el clic y envía los datos completos
  const handleContentClick = (key) => {
    setSelectedContent({
      type: "experience",
      key: key,
      data: experienceData[key]
    });
  };

  return (
    <section id="experience">
      <h2>Experiencia</h2>
      <div >
          <button
            className="contact-button"
            onClick={() => handleContentClick("Fatties SAS")}
          >
            Fatties SAS
          </button>
          <button
            className="contact-button"
            onClick={() => handleContentClick("Gold Clean")}
          >
            Gold Clean
          </button>
          <button
            className="contact-button"
            onClick={() => handleContentClick("Cotilloneria LIP")}
          >
            Cotilloneria LIP
          </button>
          <button
            className="contact-button"
            onClick={() => handleContentClick("Burger King")}
          >
            Burger King
          </button>
          <button
            className="contact-button"
            onClick={() => handleContentClick("Nestlé")}
          >
            Nestlé
          </button>
          </div>
    </section>
  );
}

Experience.propTypes = {
  setSelectedContent: PropTypes.func.isRequired,
};

export default Experience;