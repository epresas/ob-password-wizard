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

export const Wrapper = styled.section`
  background-color: var(--color-white);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 2px 5px 2px var(--color-grey-light);
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  padding: 0 1rem;

  @media all and (min-width: 768px) {
    padding: 0 4rem;
  }
`;
