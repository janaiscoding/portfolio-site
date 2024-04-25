import Hero from "@/app/portfolio_sections/Hero";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Hero", () => {
  beforeEach(() => {
    // https://stackoverflow.com/questions/44249985/testing-code-that-uses-an-intersectionobserver
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<Hero />);
  });

  it("Renders the correct heading", () => {
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toEqual("Jana Istrate");
  });

  it("Renders only one heading", () => {
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toEqual(1);
  });

  it("Properly renders the profile image with alt text", () => {
    const image = screen.getByAltText(/portrait picture/i);
    expect(image).toBeInTheDocument();
  });
});
