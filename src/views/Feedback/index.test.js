import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import i18n from "../../i18n";

import Step3View from "./index";

describe("Success feedback", () => {
  beforeEach(() => {
    const props = {
      hasSubmitSucceded: true,
      onContinue: () => {},
    };

    render(<Step3View {...props} />);
  });

  test("should render title and description correctly", () => {
    const { getByText } = screen;
    const title = getByText("!Tu Password Manager está Creado¡");
    const description = getByText(
      "Ya puedes acceder a tu Cuenta Corriente OpenClose"
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test("should render continue button when submit has succeeded", () => {
    const { getByText } = screen;
    const button = getByText("Acceder >");

    expect(button).toBeInTheDocument();
  });
});

describe("Success fail", () => {
  beforeEach(() => {
    const props = {
      hasSubmitSucceded: false,
      onContinue: () => {},
    };

    render(<Step3View {...props} />);
  });

  test("should render title and description correctly", () => {
    const { getByText } = screen;
    const title = getByText("Ha habido un error");
    const description = getByText(
      "No hemos podido modificar tu contraseña. Intenta más tarde."
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test("should render continue button when submit has failed", () => {
    const { getByText } = screen;
    const button = getByText("Volver al Password Manager >");

    expect(button).toBeInTheDocument();
  });
});
