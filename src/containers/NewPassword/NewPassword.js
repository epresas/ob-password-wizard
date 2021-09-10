import React, { useState, useEffect, useCallback } from "react";

import Stepper from "../Stepper";
import Step1 from "../../views/ProductInformation";
import Step2 from "../Step2";
import Step3 from "../../views/Feedback";

import { submitForm } from "../../services/api";

const NewPassword = (props) => {
  const [currentStep, setCurrentStep] = useState(2);
  const [steps, setSteps] = useState([
    {
      id: 1,
      isCompleted: false,
      isCurrent: currentStep === 1,
    },
    {
      id: 2,
      isCompleted: false,
      isCurrent: currentStep === 2,
    },
    {
      id: 3,
      isCompleted: false,
      isCurrent: currentStep === 3,
    },
  ]);

  const onSubmitForm = async (formData) => {
    const { password, passwordConfirmation, passwordHint } = formData;
    const result = await submitForm(
      password,
      passwordConfirmation,
      passwordHint
    );
    debugger;
  };

  const STEP_COMPONENTS = [
    {
      component: Step1,
      onCancel: "",
      onContinue: "",
    },
    {
      component: Step2,
      onContinue: onSubmitForm,
      onCancel: "",
    },
    {
      component: Step3,
      onCancel: "",
      onContinue: "",
    },
  ];
  const getCurrentStep = useCallback(() => {
    const { component, onCancel, onContinue } =
      STEP_COMPONENTS[currentStep - 1];
    const CurrentStepContent = component;
    return <CurrentStepContent onCancel={onCancel} onContinue={onContinue} />;
  }, [STEP_COMPONENTS, currentStep]);

  useEffect(() => {
    getCurrentStep();
  }, [getCurrentStep]);

  return (
    <section>
      <Stepper steps={steps} />
      {getCurrentStep()}
    </section>
  );
};

export default NewPassword;
