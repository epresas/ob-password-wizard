import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Title from "../../components/ui/title";
import Footer from "../../components/footer";

import { InfoBlock, Wrapper, Consent } from "./styles";

const Step1 = ({ onContinue, onCancel }) => {
  const { t } = useTranslation();
  const [hasComplied, setHasComplied] = useState(false);
  const onCheckCompliance = () => {
    setHasComplied((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Title>{t("common.mainTitle")}</Title>
      <InfoBlock>
        <p>{t("step1InfoBlock1")}</p>
        <p>{t("step1InfoBlock2")}</p>
      </InfoBlock>
      <InfoBlock>
        <Consent>
          <input
            type="checkbox"
            onChange={onCheckCompliance}
            value={hasComplied}
            id="complianceCheckbox"
          />
          <label htmlFor="complianceCheckbox">{t("complianceText")}</label>
        </Consent>
      </InfoBlock>
      <Footer
        onContinue={onContinue}
        onCancel={onCancel}
        showNextButton={hasComplied}
      />
    </Wrapper>
  );
};

export default Step1;
