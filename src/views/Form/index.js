import React from "react";

import { Form } from "./styles";
import Title from "../../components/ui/title";
import PasswordInput from "../../components/passwordInput";
import Footer from "../../components/footer";

const Step2View = ({ register, onSubmitForm, errors, onCancel }) => {
  return (
    <>
      <Title>Crea tu Password Manager</Title>
      <section>
        <p>
          En primer lugar debes crear una contraseña para tu Cuenta Corriente
          Open Close.
        </p>
        <p>No podrás recuperarla, así que recuerdala bien.</p>
      </section>
      <section>
        <Form>
          <PasswordInput
            register={register}
            name="password"
            placeholder="Ingrese contraseña"
            error={errors.password}
            label="Crea tu contraseña maestra"
          />
          <PasswordInput
            register={register}
            name="passwordConfirmation"
            placeholder="Repita contraseña"
            error={errors.passwordConfirmation}
            label="Repite tu contraseña maestra"
          />

          <p>
            Tambien puedes añadir una pista que te ayude a recordar tu
            contraseña.
          </p>
          <textarea
            {...register("passwordHint")}
            placeholder="Introduce tu pista"
          />
          <p>{errors && errors.passwordHint && errors.passwordHint.message}</p>
        </Form>
      </section>
      <Footer onContinue={onSubmitForm} onCancel={onCancel} />
    </>
  );
};

export default Step2View;
