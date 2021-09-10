import styled from "styled-components";

export const StepsList = styled.ul`
  background-color: var(--color-grey-light);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 3px solor var(--color-grey-light);
  box-shadow: 0 2px 1px 0 var(--color-secondary-light);
  list-style: none;
  display: flex;
  min-height: 72px;
  margin: 0;
  justify-content: center;
  padding: 0;

  @media all and (min-width: 768px) {
    min-height: 80px;
  }
`;
