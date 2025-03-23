import { useState } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import "./App.css";

function App() {
  const [selectedContent, setSelectedContent] = useState("");

  return (
    <div>
      <Header />
      <Carousel setSelectedContent={setSelectedContent} />
      
      {/* Sección para mostrar contenido dinámico */}
      {selectedContent && (
        <div className="dynamic-content-container">
          <section className="dynamic-content">
            {/* Manejo de contenido de tipo educación */}
            {selectedContent.type === "education" && (
              <>
                <h3>{selectedContent.data.title}</h3>
                
                {selectedContent.data.institution && (
                  <p><strong>Institución:</strong> {selectedContent.data.institution}</p>
                )}
                
                {selectedContent.data.period && (
                  <p><strong>Período:</strong> {selectedContent.data.period}</p>
                )}
                
                {selectedContent.data.description && (
                  <p>{selectedContent.data.description}</p>
                )}
                
                {selectedContent.data.achievements && (
                  <div>
                    <p><strong>Logros:</strong></p>
                    <ul className="achievements-list">
                      {selectedContent.data.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedContent.data.courses && (
                  <div className="courses-container">
                    {selectedContent.data.courses.map((course, index) => (
                      <div key={index} className="course-item">
                        <h4>{course.name}</h4>
                        <p><strong>Institución:</strong> {course.institution}</p>
                        <p><strong>Año:</strong> {course.year}</p>
                        <p>{course.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            
            {/* Manejo de contenido de tipo experiencia */}
            {selectedContent.type === "experience" && (
              <>
                <h3>{selectedContent.data.title}</h3>
                
                {selectedContent.data.position && (
                  <p><strong>Cargo:</strong> {selectedContent.data.position}</p>
                )}
                
                {selectedContent.data.period && (
                  <p><strong>Período:</strong> {selectedContent.data.period}</p>
                )}
                
                {selectedContent.data.description && (
                  <p>{selectedContent.data.description}</p>
                )}
                
                {selectedContent.data.responsibilities && (
                  <div>
                    <p><strong>Responsabilidades:</strong></p>
                    <ul className="responsibilities-list">
                      {selectedContent.data.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            
            {/* Manejo de contenido de tipo string (para compatibilidad) */}
            {typeof selectedContent === 'string' && (
              <p>{selectedContent}</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;