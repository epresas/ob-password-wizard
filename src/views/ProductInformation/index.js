import React, { useState } from "react";

import Title from "../../components/ui/title";
import Footer from "../../components/footer";

const Step1 = ({ onContinue, onCancel }) => {
  const [hasComplied, setHasComplied] = useState(false);
  const onCheckCompliance = () => {
    setHasComplied((prevState) => !prevState);
  };

  return (
    <>
      <Title>Crea tu Password Manager</Title>
      <section>
        <p>
          ¡Bienvenido a tu Cuenta Corriente Open Close!, en este asistente vamos
          a crear una contraseña para acceder a tus servicios, para ello te
          pediremos unos datos en los siguientes pasos.
        </p>
        <p>
          Debes recordar que esta contraseña no se puede restaurar, así que
          asegurate de recordarla bien.
        </p>
      </section>
      <section>
        <div>
          <input
            type="checkbox"
            onChange={onCheckCompliance}
            value={hasComplied}
            id="complianceCheckbox"
          />
          <label htmlFor="complianceCheckbox">
            Indico que soy mayor de edad, y acepto que mis datos personales sean
            tratados según la política de protección de datos.
          </label>
        </div>
      </section>
      <Footer
        onContinue={onContinue}
        onCancel={onCancel}
        showNextButton={hasComplied}
      />
    </>
  );
};

export default Step1;
