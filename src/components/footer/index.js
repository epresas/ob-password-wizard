import React from "react";

import Button from "../ui/button";
import { FooterWrapper } from "./styles";

const Footer = ({ onCancel, onContinue, showNextButton = true }) => {
  return (
    <FooterWrapper>
      <Button variant="cancel" onCancel={onCancel} />
      {showNextButton && <Button variant="next" onContinue={onContinue} />}
    </FooterWrapper>
  );
};

export default Footer;
