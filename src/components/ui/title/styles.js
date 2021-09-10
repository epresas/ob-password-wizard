import styled from "styled-components";

export const H1 = styled.h1`
  color: var(--color-secondary);
  font-size: 20px;
  font-weight: 800;
  line-height: 48px;
  position: relative;

  @media all and (min-width: 768px) {
    font-size: 24px;
  }

  &::after {
    content: "";
    background-color: var(--color-blue-primary);
    border-radius: 4px;
    width: 30px;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
