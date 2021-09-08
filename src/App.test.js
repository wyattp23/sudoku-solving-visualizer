import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Sudoku Solving Visualizer/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders solve button", () => {
  render(<App />);
  const solveButton = screen.getByText(/solve/i);
  expect(solveButton).toBeInTheDocument();
});

test("renders reset button", () => {
  render(<App />);
  const resetButton = screen.getByText(/reset/i);
  expect(resetButton).toBeInTheDocument();
});
