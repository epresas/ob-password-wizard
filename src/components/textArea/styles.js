import styled from "styled-components";

export const TextAreaControl = styled.textarea.attrs((props) => ({ rows: 2 }))`
  height: 2rem;
  width: 100%;

  @media all and (min-width: 768px) {
    height: 4rem;
  }

  &::placeholder {
    font-family: "Quicksand", sans-serif;
    color: var(--color-grey);
  }
`;

export const InputGroup = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0;
  position: relative;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: var(--color-primary);
  font-size: 12px;
  line-height: 14px;
`;

export const Label = styled.label`
  color: var(--color-secondary);
  display: inline-block;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 5px;
`;

export const Counter = styled.span`
  color: var(--color-grey-light);
  font-size: 12px;
  margin-top: 5px;
  text-align: right;
  width: 100%;
`;
