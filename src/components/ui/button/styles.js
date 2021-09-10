import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: none;
  border: none;
  color: var(--color-secondary);
  outline: none;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  letter-spacing: 0.6px;

  &.button {
    border-radius: 2px;
    padding: 1rem;
    text-align: center;

    &__next {
      background-color: var(--color-secondary);
      color: var(--color-white);
    }
    &__cancel {
    }
  }
`;
