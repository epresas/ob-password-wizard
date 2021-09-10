import styled from "styled-components";
import fail from "../../assets/img/warning-sign.svg";
import success from "../../assets/img/check.svg";

export const Wrapper = styled.section`
  @media all and (min-width: 768px) {
    padding: 0 4rem;
  }
`;

export const Content = styled.div`
  border: 1px solid var(--color-grey);
  box-shadow: 0 2px 2px 0 var(--color-grey);
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem;
  flex-wrap: wrap;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Body = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.3rem;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  border-top: 1px solid var(--color-grey);
  width: 100%;
  margin-top: auto;

  @media all and (min-width: 768px) {
    padding: 0 4rem;
    margin-top: 2rem;
    height: 80px;
  }
`;

export const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 1rem;
  color: var(--color-primary);
`;

export const Icon = styled.span`
  background-image: ${({ hasSubmitSucceded }) =>
    hasSubmitSucceded ? "url(" + success + ")" : "url(" + fail + ")"};
  background-repeat: no-repeat;
  display: block;
  height: 48px;
  width: 48px;
  margin-top: 2rem;

  @media all and (min-width: 768px) {
    margin-right: 2rem;
    margin-top: 0;
    margin-left: 4rem;
    height: 32px;
    width: 32px;
  }
`;
