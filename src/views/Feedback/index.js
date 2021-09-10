import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Content>
        <Icon hasSubmitSucceded={hasSubmitSucceded} />
        <Body>
          <Title>
            {hasSubmitSucceded
              ? t("feedbackTitleSuccess")
              : t("feedbackTitleError")}
          </Title>
          <Description>
            {hasSubmitSucceded
              ? t("feedbackDescriptionSuccess")
              : t("feedbackDescriptionError")}
          </Description>
        </Body>
        <Footer>
          <Button onClick={onContinue}>
            {hasSubmitSucceded
              ? t("common.btnAccessLabel")
              : t("common.btnRestartLabel")}
          </Button>
        </Footer>
      </Content>
    </Wrapper>
  );
};

export default Step3View;
