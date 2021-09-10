import styled from "styled-components";
import eyeOpen from "../../assets/img/eye-open.svg";
import eyeClosed from "../../assets/img/eye-closed.svg";

export const Input = styled.input.attrs(({ type }) => ({ type }))`
  border: 2px solid;
  border-color: ${(props) =>
    props.error ? "var(--color-primary)" : "var(--color-grey)"};
  border-radius: 4px;
  height: 2rem;
  position: relative;
  width: 100%;

  &::placeholder {
    font-family: "Quicksand", sans-serif;
    color: var(--color-grey);
  }
`;

export const IconButton = styled.span`
  background-image: ${(props) =>
    props.showPassword ? "url(" + eyeClosed + ")" : "url(" + eyeOpen + ")"};
  height: 24px;
  position: absolute;
  right: 5px;
  top: 2rem;
  width: 24px;
`;

export const InputGroup = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0;
  position: relative;
  height: 5rem;
  max-width: 300px;
  width: 100%;

  @media all and (min-width: 768px) {
    &:first-of-type {
      margin-right: 2rem;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: var(--color-primary);
  font-size: 12px;
  line-height: 14px;
`;

export const PasswordStrength = styled.div`
  background-color: ${({ strength }) =>
    strength <= 1
      ? "orange"
      : strength === 2
      ? "yellow"
      : strength === 3
      ? "green"
      : strength === 4
      ? "blue"
      : "red"};
  content: "";
  height: 3px;
  position: absolute;
  transform: translateY(-5px);
  transition: width 0.3s linear, background-color 0.2s linear 0.2s;
  left: 4px;
  bottom: 20%;
  width: ${(props) => "" + props.strength * 25 + "%"};
  max-width: 100%;
`;

export const Label = styled.label`
  color: var(--color-secondary);
  display: inline-block;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 5px;
`;
