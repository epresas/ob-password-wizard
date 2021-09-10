import React from "react";
import { StepsList } from "./styles";

import Step from "../../components/ui/step";

const StepperView = ({ steps }) => {
  return (
    <StepsList>
      {steps.map(({ isCompleted, isCurrent, id }) => (
        <Step
          isCompleted={isCompleted}
          isCurrent={isCurrent}
          id={id}
          key={id}
        />
      ))}
    </StepsList>
  );
};

export default StepperView;
