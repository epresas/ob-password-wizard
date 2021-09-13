import React, { useState, useRef, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import "road-dropdown";

import Title from "../../components/ui/title";
import Footer from "../../components/footer";

import { InfoBlock, Wrapper, Consent } from "./styles";

const Step1 = ({ onContinue, onCancel }) => {
  const { t } = useTranslation();
  const [hasComplied, setHasComplied] = useState(false);
  const onCheckCompliance = () => {
    setHasComplied((prevState) => !prevState);
  };
  const ref = useRef();

  // WEB COMPONENT INTEGRATION

  /**
   * Things to consider about integration:
   * - string props can be passed without problems to wc as args.
   * - Array and object props must be stringified with JSON
   * - For methods, a good practice is create a ref to DOM element and register a listener for the custom events,
   *   ir order to do that, useLayoutEffect is the ideal hook, because it waits for the DOM to render completely.
   *   Also add a return to the effect to clean the listeners.
   */

  const dropdownProps = {
    label: "Mi web component",
    option: "option1",
    options: {
      option1: { label: "Option 1" },
      option2: { label: "Option 2" },
      option3: { label: "Option 3" },
      option4: { label: "Option 4" },
    },
    onChange: (value) => console.log(value),
  };

  useLayoutEffect(() => {
    const { current } = ref;
    const handleChange = (customEvent) =>
      dropdownProps.onChange(customEvent.detail);
    current.addEventListener("onChange", handleChange);
    return () => current.removeEventListener("onChange", handleChange);
  }, [dropdownProps]);

  // END OF WEB COMPONENT INTEGRATION

  return (
    <Wrapper>
      <Title>{t("common.mainTitle")}</Title>
      <InfoBlock>
        <p>{t("step1InfoBlock1")}</p>
        <p>{t("step1InfoBlock2")}</p>
      </InfoBlock>
      <InfoBlock>
        {/* WEB COMPONENT */}
        <road-dropdown
          label={dropdownProps.label}
          option={dropdownProps.option}
          ref={ref}
          options={JSON.stringify(dropdownProps.options)}
        />
        {/* WEB COMPONENT */}
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
