import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("renders board header", () => {
    render(<App />);
    expect(screen.getByText(/kanban board/i)).toBeInTheDocument();
  });

  it("can add a new task", () => {
    render(<App />);
    const titleInput = screen.getByPlaceholderText(/Task title/i);
    const addBtn = screen.getByText(/Add Task/i);
    fireEvent.change(titleInput, { target: { value: "Test task" } });
    fireEvent.click(addBtn);
    expect(screen.getByText(/Test task/i)).toBeInTheDocument();
  });
});
