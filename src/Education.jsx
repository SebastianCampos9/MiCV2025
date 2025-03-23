// Education.jsx
import PropTypes from "prop-types";

function Education({ setSelectedContent }) {
  // Define los datos directamente en el componente
  const educationData = {
    "Secundario": {
      title: "Educación Secundaria",
      institution: "Nombre de tu Escuela Secundaria",
      period: "Años de estudio (ej: 2010 - 2014)",
      description: "Descripción de tus estudios secundarios, orientación, etc.",
      achievements: [
        "Logro destacado 1",
        "Logro destacado 2",
        "Promedio general"
      ]
    },
    "Cursos Terminados": {
      title: "Cursos y Certificaciones",
      courses: [
        {
          name: "Nombre del Curso 1",
          institution: "Plataforma o Institución",
          year: "Año de finalización",
          description: "Breve descripción del curso"
        },
        {
          name: "Nombre del Curso 2",
          institution: "Plataforma o Institución",
          year: "Año de finalización",
          description: "Breve descripción del curso"
        },
        {
          name: "Nombre del Curso 3",
          institution: "Plataforma o Institución",
          year: "Año de finalización",
          description: "Breve descripción del curso"
        }
      ]
    }
  };

  // Función que maneja el clic y envía los datos completos en lugar de solo el título
  const handleContentClick = (key) => {
    setSelectedContent({
      type: "education",
      key: key,
      data: educationData[key]
    });
  };

  return (
    <section id="education">
      <h2>Educación</h2>
      <div className="experience-buttons">
        <button
          className="contact-button"
          onClick={() => handleContentClick("Secundario")}
        >
          Secundario
        </button>
        <button
          className="contact-button"
          onClick={() => handleContentClick("Cursos Terminados")}
        >
          Cursos Terminados
        </button>
      </div>
    </section>
  );
}

// ✅ Agregar validación de PropTypes
Education.propTypes = {
  setSelectedContent: PropTypes.func.isRequired,
};

export default Education;