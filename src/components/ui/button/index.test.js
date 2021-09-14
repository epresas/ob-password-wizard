import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "./index";

describe("Button component variant next", () => {
  beforeEach(() => {
    render(<Button variant="next" onCancel={() => {}} onContinue={() => {}} />);
  });

  test("should render correctly", () => {
    const { getByRole } = screen;
    expect(getByRole("button")).toBeInTheDocument();
  });

  test("should have className 'button__next'", () => {
    const { getByRole } = screen;
    expect(getByRole("button")).toHaveClass("button__next");
  });
});

describe("Button component variant cancel", () => {
  beforeEach(() => {
    render(
      <Button variant="cancel" onCancel={() => {}} onContinue={() => {}} />
    );
  });

  test("should render correctly", () => {
    const { getByRole } = screen;
    expect(getByRole("button")).toBeInTheDocument();
  });

  test("should have className 'button__cancel'", () => {
    const { getByRole } = screen;
    expect(getByRole("button")).toHaveClass("button__cancel");
  });
});
