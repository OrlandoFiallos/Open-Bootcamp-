import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { useState } from "react";

const ChangeState = ({ contact }) => {
  const [conection, setConection] = useState(Contact.propTypes.conectado);
  const handleClick = () => {
    setConection((conection) => !conection);
  };

  return (
    <div>
      <p>
        Conectado: {conection ? "Contacto en Línea" : "Contacto no Disponible"}
      </p>
      <button onClick={handleClick}>Cambiar Estado</button>
    </div>
  );
};

ChangeState.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ChangeState;
