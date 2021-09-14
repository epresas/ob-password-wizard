import styled from "styled-components";

export const ButtonWrapper = styled.button.attrs((props) => ({
  role: "button",
}))`
  background: none;
  border: none;
  color: var(--color-secondary);
  outline: none;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  letter-spacing: 0.6px;

  &.button {
    border-radius: 2px;
    cursor: pointer;
    padding: 1rem;
    text-align: center;

    &__next {
      border: 1px solid var(--color-secondary);
      background-color: var(--color-secondary);
      color: var(--color-white);
      transition: all 0.2s ease-in;

      &:hover {
        background-color: var(--color-white);
        color: var(--color-secondary);
      }
    }
    &__cancel {
      border: 1px solid var(--color-white);
      transition: all 0.2s ease-in;
      &:hover {
        border: 1px solid var(--color-secondary);
        color: var(--color-secondary);
      }
    }
  }
`;
