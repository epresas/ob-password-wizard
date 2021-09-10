import styled from "styled-components";

export const StepWrapper = styled.div`
  align-items: center;
  align-self: center;
  background-color: ${({ isCompleted, isCurrent }) =>
    isCompleted
      ? "var(--color-primary)"
      : isCurrent
      ? "var(--color-secondary)"
      : "var(--color-secondary-light)"};
  border-radius: 50%;
  color: var(--color-white);
  display: flex;
  height: ${({ isCurrent }) => (isCurrent ? "32px" : "24px")};
  justify-content: center;
  position: relative;
  width: ${({ isCurrent }) => (isCurrent ? "32px" : "24px")};
`;

export const StepContainer = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;

  height: 100%;
  position: relative;

  &::after {
    content: "";
    border: 16px solid transparent;
    border-bottom-color: ${({ isCurrent }) =>
      isCurrent ? "var(--color-white)" : "transparent"};
    position: absolute;
    bottom: -4px;
  }

  &:not(:last-of-type) {
    margin-right: 30px;

    &::before {
      content: "";
      height: 3px;
      width: 30px;
      background-color: ${({ isCompleted }) =>
        isCompleted ? "var(--color-primary)" : "var(--color-secondary-light)"};
      position: absolute;
      transform: translateY(-50%);
      left: 100%;
      top: 50%;
    }
  }
`;
