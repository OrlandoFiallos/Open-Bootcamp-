import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import ChangeState from "./ChangeState";

const Contact = (props) => {
  const [conection, setConection] = useState(false);
  const handleChange = () => {
    setConection(conection ? false : true);
  };
  return (
    <div>
      <h1>Contactos</h1>
      <p>Nombre: {props.name}</p>
      <p>Apellido: {props.apellido}</p>
      <p>Email: {props.email} </p>
      {/* <p>fdfd{conection}</p> */}
      <p>
        Conectado: {conection ? "Contacto En Línea" : "Contacto No Disponible"}
      </p>
      {/* <ChangeState contact={}/> */}

      <button onClick={handleChange}>Cambiar estado</button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool,
};

export default Contact;
