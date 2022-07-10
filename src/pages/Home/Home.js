import React from "react";
import ondas from "../../assets/navbar/ondas.png";
import "./home.css";

export default function Home() {
  return (
    <div>
      <title>Jardín Burbujas de Algodón</title>
      <body>
        <main>
          <div className="container-text">
            <p>Podes solicitar un turno para</p>
            <h1>VISITAR EL JARDÍN</h1>
            <a href="/turnos">TURNERO</a>
          </div>
        </main>
        <div className="wpp">
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp"></i>
            
          </a>
        </div>
        <footer>
          <img src= {ondas} alt="" />
        </footer>
      </body>
    </div>
  );
}
