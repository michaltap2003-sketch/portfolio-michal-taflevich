import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Home from "../app/page";

afterEach(() => {
  cleanup();
});

test("renders the portfolio heading", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Michal Taflevich - Portfolio" }),
  ).toBeDefined();
});

test("renders the Deploy Now and Documentation links", () => {
  render(<Home />);
  expect(screen.getByRole("link", { name: /Deploy Now/ })).toBeDefined();
  expect(screen.getByRole("link", { name: "Documentation" })).toBeDefined();
});
