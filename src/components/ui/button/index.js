import React from "react";

import { ButtonWrapper } from "./styles";

const Button = ({ variant, onContinue = () => {}, onCancel = () => {} }) => {
  const handleClick = () => {
    variant === "next" ? onContinue() : onCancel();
  };

  return (
    <ButtonWrapper
      onClick={handleClick}
      variant={variant}
      className={` button button__${variant}`}
    >
      {variant === "next" ? "Siguiente >" : "Cancelar"}
    </ButtonWrapper>
  );
};

export default Button;
