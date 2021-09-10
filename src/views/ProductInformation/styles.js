import styled from "styled-components";

export const InfoBlock = styled.section`
  font-size: 14px;
  line-height: 1.3rem;
  margin-bottom: 20px;
`;

export const Wrapper = styled.section`
  background-color: var(--color-white);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 2px 5px 2px var(--color-grey-light);
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 1rem;

  @media all and (min-width: 768px) {
    padding: 0 4rem;
  }
`;

export const Consent = styled.div`
  cursor: pointer;
  display: flex;

  #complianceCheckbox {
    cursor: pointer;
    margin-right: 1rem;
  }

  label {
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
  }
`;
