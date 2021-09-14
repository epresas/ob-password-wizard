import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import i18n from "../../../i18n";
import Title from "./index";

describe("Title Component", () => {
  beforeEach(() => {
    render(<Title children={undefined}>{i18n.t("common.mainTitle")}</Title>);
  });

  test("should render correctly", () => {
    const { getByText } = screen;
    expect(getByText("Crea tu Password Manager")).toBeInTheDocument();
  });
});
