import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should Contact work or not", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument(heading);
});


test("Should load button in Contact in component or not", () => {
  render(<Contact />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("Should load input Name in Contact in component or not", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");

  expect(inputName).toBeInTheDocument();
});

