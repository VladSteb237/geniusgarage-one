import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";
//import { FakeButton } from "./button";

describe("Button component", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
    // Added comment - hash changes
    // Another comment - hash changes
  });

  it("applies primary variant by default", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("applies secondary variant when specified", () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gray-200");
    expect(button).toHaveClass("text-gray-900");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as button element", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button.tagName).toBe("BUTTON");
  });
});

describe("global vitest", () => {
  it("works everywhere", () => {
    expect(true).toBe(true);
  });
});

// TODO: Add test 'applies secondary variant when specified'
//   - Render: <Button variant="secondary">Test</Button>
//   - Get button with getByRole('button')
//   - Assert: button has 'bg-gray-200' class
//   - Assert: button has 'text-gray-900' class

// TODO: Add test 'calls onClick handler when clicked'
//   - Create mock function: const handleClick = vi.fn()
//   - Render: <Button onClick={handleClick}>Click</Button>
//   - Get button with getByRole('button')
//   - Fire click event: fireEvent.click(button)
//   - Assert: handleClick was called once: expect(handleClick).toHaveBeenCalledTimes(1)

// TODO: Add test 'renders as button element'
//   - Render: <Button>Test</Button>
//   - Get button with getByRole('button')
//   - Assert: button.tagName is 'BUTTON'
