// Although not required this is imported here to avoid TS errors that show up in VSCode
// TODO: Find how we can disable these errors for TS
import React from "react";
import { render, screen } from "@testing-library/react";
import { Greet } from "../src/Greet";

describe("Greet", () => {
  test("Tests for rendering correctly with props", () => {
    render(<Greet name="Vishwas" />);
    const labelText = screen.getByLabelText("Vishwas");
    expect(labelText).toBeInTheDocument();
  });
  test("Tests for rendering correctly without props", () => {
    render(<Greet />);
    const labelText = screen.getByLabelText("Hello");
    expect(labelText).toBeInTheDocument();
  });
  test("Tests for label text without htmlFor attribute", () => {
    render(<Greet />);
    const labelText = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(labelText).toBeInTheDocument();
  });
  test("Tests for select box", () => {
    render(<Greet />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
  });
  test("Tests for select checked box", () => {
    render(<Greet />);
    const checkedElement = screen.getByRole("option", {
      selected: true,
    });
    expect(checkedElement).toHaveValue("AU");
  });
  test("Tests for hidden element", () => {
    render(<Greet />);
    const mainHiddenElement = screen.getByRole("main", {
      hidden: true,
    });
    const paragraphElement = screen.getByText("Open Dialog");
    expect(mainHiddenElement).toContainElement(paragraphElement);
  });

  test("Tests for button element", () => {
    render(<Greet />);
    const buttonElement = screen.getByRole("button", {
      name: "Close button",
    });
    const dialogElement = screen.getByRole("dialog");
    expect(dialogElement).toContainElement(buttonElement);
  });

  test("Tests for heading elements with levels for role", () => {
    render(<Greet />);
    const h1Element = screen.getByRole("heading", {
      level: 1,
    });
    const h2Element = screen.getByRole("heading", {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent(/.*h1 tag$/);
  });

  test("Tests for Anchor Element with Link", () => {
    render(<Greet />);
    const anchorElement = screen.getByRole("link", {
      name: "Google Link",
    });
    expect(anchorElement).toBeInTheDocument();
  });

  test("Tests for list elements", () => {
    render(<Greet />);
    const listElement = screen.getByRole("list");
    // const listItemElement = screen.getByRole("listitem", {
    //   name: "first item",
    // });
    expect(listElement).toBeInTheDocument();
  });

  // To print any element, use screen.debug(<element>)
  //
  test("Test for slider element", () => {
    render(<Greet />);
    const sliderElement = screen.getByRole("slider");
    const labelElement = screen.getByLabelText("Slider");
    expect(labelElement).toContainElement(sliderElement);
    // screen.debug(sliderElement);
    expect(sliderElement).toBeInTheDocument();
  });

  test("Test for paragraph, span elements in section", () => {
    render(<Greet />);
    const paragraphElement = screen.getByText(/.*is a paragraph$/);
    const spanElement = screen.getByText(/.*span.*/);
    expect(paragraphElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent(/.*tag.*/);
  });

  test("Test for Placeholder text,and displayValue", () => {
    render(<Greet />);
    const placeholderElement = screen.getByPlaceholderText("firstName");
    expect(placeholderElement).toHaveAttribute("disabled");

    const displayValueElement = screen.getByDisplayValue("ValueInput");
    expect(displayValueElement).toBeInTheDocument();
  });

  test("Test for testid", () => {
    render(<Greet />);
    const testidElement = screen.getByTestId("button-submit");
    expect(testidElement).toHaveTextContent("Submit");
  });
});
