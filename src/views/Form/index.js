import React from "react";
import { useTranslation } from "react-i18next";

import { Form, Wrapper } from "./styles";
import Title from "../../components/ui/title";
import PasswordInput from "../../components/passwordInput";
import TextArea from "../../components/textArea";
import Footer from "../../components/footer";

const Step2View = ({ register, onSubmitForm, errors, onCancel }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("common.mainTitle")}</Title>
      <section>
        <p>{t("step2InfoBlock1")}</p>
        <p>{t("step2InfoBlock2")}</p>
      </section>
      <section>
        <Form onSubmit={onSubmitForm}>
          <PasswordInput
            register={register}
            name="password"
            placeholder={t("passwordPlaceHolderd")}
            error={errors.password}
            label={t("passwordLabel")}
          />
          <PasswordInput
            register={register}
            name="passwordConfirmation"
            placeholder={t("passwordConfirmPlaceholder")}
            error={errors.passwordConfirmation}
            label={t("passwordConfirmLabel")}
          />

          <p>{t("step2InfoBlock3")}</p>
          <TextArea
            register={register}
            name="passwordHint"
            placeholder={t("passwordHintPlaceholder")}
            error={errors.passwordHint}
            label={t("passwordHintLabel")}
          />
        </Form>
      </section>
      <Footer onContinue={onSubmitForm} onCancel={onCancel} />
    </Wrapper>
  );
};

export default Step2View;
