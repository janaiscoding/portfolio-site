import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AnchorButton from "@/app/ui_components/AnchorButton";
import React from "react";

describe("AnchorButton", () => {
  beforeEach(() => {
    render(<AnchorButton content="Contact me" idAnchor="contact" />);
  });
  it("Properly renders button with correct content and id", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toContain("Contact me");
  });

  // it("Changes hovered state on mouse enter and leave", async () => {
  //   const button = screen.getByRole("button");
  //   await act(() => userEvent.hover(button));
  //   await waitFor((): any => screen.getByRole("button"));
  //   expect(button).toContain("animate-wiggle");
  // });
});
