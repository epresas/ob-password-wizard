import React, { useState, useEffect, useCallback } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import NewPasswordView from "../../views/NewPassword";
import Stepper from "../Stepper";
import Step1 from "../../views/ProductInformation";
import Step2 from "../Step2";
import Step3 from "../../views/Feedback";

import { Backdrop } from "./styles";

import { submitForm } from "../../services/api";

/**
 * Main container for the wizard.
 *
 * @component
 */
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

  /**
   * Sets the step configuration to point to the next step
   *
   * @returns {Void}
   */
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

  /**
   * Resets the step configuration to point to the first step
   *
   * @returns {Void}
   */
  const resetWizard = () => {
    const updatedSteps = initialStepsState.map((step, index) => ({
      ...step,
      isCurrent: index === 0,
    }));
    setSteps(updatedSteps);
    setCurrentStep(1);
  };

  /**
   * Makes the api call with the data
   *
   * @returns {Void}
   */
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

  /**
   * Gets the current step component
   *
   * @returns {Object} The component to render
   */
  const getCurrentStep = useCallback(() => {
    const { component, onCancel, onContinue } =
      STEP_COMPONENTS[currentStep - 1];
    const CurrentStepContent = component;
    if (currentStep === 3) {
      return (
        <CurrentStepContent
          onCancel={() => {}}
          onContinue={resetWizard}
          hasSubmitSucceded={hasSubmitSucceded}
        />
      );
    }
    return <CurrentStepContent onCancel={onCancel} onContinue={onContinue} />;
  }, [STEP_COMPONENTS, currentStep, hasSubmitSucceded, resetWizard]);

  return (
    <NewPasswordView>
      <Stepper steps={steps} />
      {isLoading ? (
        <Backdrop>
          <Loader
            type="Puff"
            color="#ABABAB"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </Backdrop>
      ) : (
        getCurrentStep()
      )}
    </NewPasswordView>
  );
};

export default NewPassword;
