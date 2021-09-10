import React from "react";
import { StepWrapper, StepContainer } from "./styles";

import { ReactComponent as Tick } from "../../../assets/img/tick.svg";

const Step = ({ isCompleted, isCurrent, id }) => {
  return (
    <StepContainer isCompleted={isCompleted} isCurrent={isCurrent}>
      <StepWrapper isCompleted={isCompleted} isCurrent={isCurrent}>
        {isCompleted ? <Tick /> : id}
      </StepWrapper>
    </StepContainer>
  );
};

export default Step;
