import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & :nth-child(3) {
    flex-basis: 100%;
  }

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;
