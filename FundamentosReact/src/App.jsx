import { useState } from "react"
import foto from "./assets/foto.png"
import Header from "./components/header"
import Perfil from "./components/perfil"
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contenedor">
        <Header/>
        <Perfil/>
      </div>

      <div className="tarjeta-cv">
        <h1>ANALISIS Y DESARROLLO DE SOFTWARE</h1>
        <h2>TECNOLOGO</h2>
        <img src={foto} alt="Foto de inicio" width="250" />
        <h2>LUIS FELIPE GUERRERO TRUJILLO</h2>
        <h2>29</h2>
        <h2>BOGOTÁ DC</h2>
        <h2>felipeob98@gmail.com</h2>
        <h2>ADSO</h2>
        <h1>CURSOS REALIZADOS</h1>
        <h2>Seguridad y Salud en el Trabajo</h2>
        <h2>Japonés</h2>
        <h1>OBJETIVO PROFESIONAL</h1>
        <h2>¿Por qué desea aprender React?</h2>
        <br></br>
        <p>
          Porque ofrece alta demanda laboral, un diseño basado en componentes
          reutilizables y la versatilidad de crear apps web y móviles
        </p>
        <br></br>
        <h2>¿En qué tipo de proyectos le gustaría utilizarlo?</h2>
        <p>
          Proyectos prácticos como una plataforma de comercio electrónico
          (E-commerce), un tablero de gestión de tareas (tipo Trello) o una
          aplicación
        </p>
        <button type="button">Conoce mas sobre mí</button>
      </div>
    </>
  );
}

export default App;
