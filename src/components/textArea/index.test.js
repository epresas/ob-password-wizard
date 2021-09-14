import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import i18n from "../../i18n";
import TextArea from "./index";

const props = {
  register: () => {},
  name: "passwordHint",
  placeholder: i18n.t("passwordHintPlaceholder"),
  error: {},
  label: i18n.t("passwordHintLabel"),
};

describe("Text Area Component", () => {
  beforeEach(() => {
    render(<TextArea {...props} />);
  });

  test("should render correctly", () => {
    const { getByPlaceholderText } = screen;
    expect(getByPlaceholderText("Introduce tu pista")).toBeInTheDocument();
  });
});
