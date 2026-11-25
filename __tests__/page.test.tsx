import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Home from "../app/page";

afterEach(() => {
  cleanup();
});

test("renders the name as the main heading", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1, name: "Michal Taflevich" })).toBeDefined();
});

test("renders the title", () => {
  render(<Home />);
  expect(screen.getByText("Computer Science Student")).toBeDefined();
});
