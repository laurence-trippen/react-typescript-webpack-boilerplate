import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

import Counter from "./Counter";

describe("Counter component", () => {
  test("renders initial count and increments on button click", () => {
    // Render the component
    render(<Counter />);

    // Check if the initial count is 0
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();

    // Find the button and simulate a click
    const button = screen.getByText("Count up");
    fireEvent.click(button);

    // Check if the count has incremented to 1
    const updatedCountElement = screen.getByText("1");
    expect(updatedCountElement).toBeInTheDocument();
  });
});
