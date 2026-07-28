import { useState } from "react";
import foto from "./assets/foto.png"
import Header from "./components/header.jsx"
import Datosbasicos from "./components/perfil.jsx"
import Cursos from "./components/cursos.jsx"
import Piepag from "./components/footer.jsx"
import "./App.css"

function App() {
  return (
    <div className="contenedor">
      <Header />
      <Datosbasicos />
      <Cursos />
      <Piepag />
    </div>
  )
}

export default App;
