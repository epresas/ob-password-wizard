import React from "react";

import {
  Wrapper,
  Content,
  Footer,
  Button,
  Icon,
  Title,
  Description,
  Body,
} from "./styles";

const Step3View = ({ hasSubmitSucceded, onContinue }) => {
  debugger;

  return (
    <Wrapper>
      <Content>
        <Icon hasSubmitSucceded={hasSubmitSucceded} />
        <Body>
          <Title>
            {hasSubmitSucceded
              ? "!Tu Password Manager está Creado¡"
              : "Ha habido un error"}
          </Title>
          <Description>
            {hasSubmitSucceded
              ? "Ya puedes acceder a tu Cuenta Corriente OpenClose"
              : "No hemos podido modificar tu contraseña. Intenta más tarde."}
          </Description>
        </Body>
      </Content>
      <Footer>
        <Button onClick={onContinue}>
          {hasSubmitSucceded ? "Acceder >" : "Volver al Password Manager >"}
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default Step3View;
