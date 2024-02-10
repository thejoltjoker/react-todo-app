import { render } from "@testing-library/react";
import PriorityFlag from "./PriorityFlag";
import { describe, it, expect } from "vitest";

describe("PriorityFlag", () => {
  it("renders with blue color on priority 1", () => {
    const { container } = render(<PriorityFlag value={1} />);
    expect(container.firstChild).toHaveClass("text-blue-500");
  });

  it("renders with amber color on priority 2", () => {
    const { container } = render(<PriorityFlag value={2} />);
    expect(container.firstChild).toHaveClass("text-amber-500");
  });

  it("renders with red color on priority 3", () => {
    const { container } = render(<PriorityFlag value={3} />);
    expect(container.firstChild).toHaveClass("text-red-500");
  });

  it("renders with gray color on any other priority", () => {
    const { container } = render(<PriorityFlag value={0} />);
    expect(container.firstChild).toHaveClass("text-gray-400");
  });
});
