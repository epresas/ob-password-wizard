import React, { useState, useEffect, useCallback } from "react";
import NewPasswordView from "../../views/NewPassword";
import Stepper from "../Stepper";
import Step1 from "../../views/ProductInformation";
import Step2 from "../Step2";
import Step3 from "../../views/Feedback";

import { submitForm } from "../../services/api";

const NewPassword = (/* props */) => {
  const [currentStep, setCurrentStep] = useState(1);
  const initialStepsState = [
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
  ];
  const [steps, setSteps] = useState(initialStepsState);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitSucceded, setHasSubmitSucceded] = useState(null);

  const goToNextStep = () => {
    const updatedSteps = steps;
    const idx = currentStep - 1;
    const previousStep = updatedSteps[idx];
    const nextStep = updatedSteps[currentStep];
    updatedSteps[idx] = {
      ...previousStep,
      isCompleted: true,
      isCurrent: false,
    };
    updatedSteps[currentStep] = {
      ...nextStep,
      isCurrent: true,
    };

    setCurrentStep(Math.min(currentStep + 1, 3));
    setSteps(updatedSteps);
  };

  const resetWizard = () => {
    const updatedSteps = initialStepsState.map((step, index) => ({
      ...step,
      isCurrent: index === 0,
    }));
    setSteps(updatedSteps);
    setCurrentStep(1);
  };

  const onSubmitForm = async (formData) => {
    const { password, passwordConfirmation, passwordHint } = formData;
    setIsLoading(true);
    submitForm(password, passwordConfirmation, passwordHint)
      .then((res) => {
        setIsLoading(false);
        setHasSubmitSucceded(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setHasSubmitSucceded(false);
      });
    goToNextStep();
  };

  const STEP_COMPONENTS = [
    {
      component: Step1,
      onCancel: resetWizard,
      onContinue: goToNextStep,
    },
    {
      component: Step2,
      onCancel: resetWizard,
      onContinue: onSubmitForm,
    },
    {
      component: Step3,
      onCancel: null,
      onContinue: resetWizard,
    },
  ];

  const getCurrentStep = useCallback(() => {
    const { component, onCancel, onContinue } =
      STEP_COMPONENTS[currentStep - 1];
    const CurrentStepContent = component;
    // debugger;
    if (currentStep === 3) {
      debugger;
      return (
        <CurrentStepContent
          onCancel={() => {}}
          onContinue={resetWizard}
          hasSubmitSucceded={hasSubmitSucceded}
        />
      );
    }
    return <CurrentStepContent onCancel={onCancel} onContinue={onContinue} />;
  }, [STEP_COMPONENTS, currentStep]);

  return (
    <NewPasswordView>
      <Stepper steps={steps} />
      {isLoading ? <p>Loading...</p> : getCurrentStep()}
    </NewPasswordView>
  );
};

export default NewPassword;
