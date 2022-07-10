import React from "react";
import "./navbar.css"
import logo from "../../assets/navbar/navbar-logo.png";

export default function Navbar() {
  return <div>
          <header>
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
              Burbujas de Algodón
            </a>
          </div>
          <nav>
            <a href="/">
              <i class="fa-solid fa-house"></i>Inicio
            </a>
            <a href="/garden">
              <i class="fa-solid fa-shapes"></i>El Jardín
            </a>
            <a href="/gallery">
              <i class="fa-solid fa-camera"></i>Galeria
            </a>
          </nav>
          <div className="contact">
            <a href="/contacto">
            <i class="fa-solid fa-address-book"></i>Contacto
            </a>
          </div>
        </div>
      </header>
  </div>;
}
