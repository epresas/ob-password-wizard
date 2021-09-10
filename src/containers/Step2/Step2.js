import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Step2View from "../../views/Form";

/**
 * Container for the form logic
 *
 * @param {*} { onContinue = () => {}, onCancel = () => {} }
 * @component
 */
const Step2 = ({ onContinue = () => {}, onCancel = () => {} }) => {
  // Validation schema for the form
  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Campo requerido.")
      .min(8, "La contraseña debe tener mínimo 8 caracteres.")
      .max(24, "La contraseña debe tener máximo 24 caracteres.")
      .matches(
        /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,24}$/,
        "La contraseña debe tener al menos 1 mayúscula y 1 número."
      ),
    passwordConfirmation: yup
      .string()
      .required("Campo requerido.")
      .min(8, "La contraseña debe tener mínimo 8 caracteres.")
      .max(24, "La contraseña debe tener máximo 24 caracteres.")
      .matches(
        /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,24}$/,
        "La contraseña debe tener al menos 1 mayúscula y 1 número."
      )
      .test(
        "passwords-match",
        "Las contraseñas deben coincidir",
        function (value) {
          return this.parent.password === value;
        }
      ),
    passwordHint: yup
      .string()
      .max(255, "La pista no debe exceder los 255 caracteres."),
  });
  // React form hook methods
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  /**
   * Submit method that fires the parent container's submit
   *
   * @returns {Void}
   */
  const onSubmitForm = (data) => {
    console.log(data);
    onContinue(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ password: "", passwordConfirmation: "", passwordHint: "" });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <Step2View
      register={register}
      errors={errors}
      onSubmitForm={handleSubmit(onSubmitForm)}
      onCancel={onCancel}
    />
  );
};

export default Step2;
