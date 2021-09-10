import React from "react";
import { useTranslation } from "react-i18next";

import { ButtonWrapper } from "./styles";

const Button = ({ variant, onContinue = () => {}, onCancel = () => {} }) => {
  const { t } = useTranslation();
  const handleClick = () => {
    variant === "next" ? onContinue() : onCancel();
  };

  return (
    <ButtonWrapper
      onClick={handleClick}
      variant={variant}
      className={` button button__${variant}`}
    >
      {variant === "next"
        ? t("common.btnNextLabel")
        : t("common.btnCancelLabel")}
    </ButtonWrapper>
  );
};

export default Button;
