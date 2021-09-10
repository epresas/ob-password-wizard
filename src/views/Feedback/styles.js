import styled from "styled-components";
import fail from "../../assets/img/warning-sign.svg";
import success from "../../assets/img/check.svg";

export const Wrapper = styled.section`
  @media all and (min-width: 768px) {
    padding: 0 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const Body = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Description = styled.p``;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: none;
  outline: none;
  color: var(--color-primary);
`;

export const Icon = styled.span`
  background-image: ${({ hasSubmitSucceded }) =>
    hasSubmitSucceded ? "url(" + success + ")" : "url(" + fail + ")"};
  background-repeat: no-repeat;
  display: block;
  height: 48px;
  width: 48px;

  @media all and (min-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;
