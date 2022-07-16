import "./Contact.css";
import imagenForm from "../../assets/photoGarden/photoLeft.png";

import React from "react";

export default function Contact() {
  return (
    <div action="Form.php" method="post">
     
      <form  className="formulario">
      <h1 className="tituloContac">Contacto</h1>
        <input type="text" name="nombre" placeholder="Nombre"></input>
        <br />
        <input type="text" name="email" placeholder="Mail"></input>
        <br />
        <textarea
          name="textarea"
          className="imputMensaje"
          type="text"
          placeholder="Mensaje"
        ></textarea>
        <button className="botonForm">Enviar</button>
      </form>

      <div className="imgForm">
          <img src={imagenForm} alt={"imageForm"} />
        </div>
    </div>
  );
}
