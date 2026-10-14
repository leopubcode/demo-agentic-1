import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "../Contact";

describe("Contact", () => {
  it("shows the contact email", () => {
    render(<Contact />);

    expect(
      screen.getByRole("link", { name: "hello@example.com" }),
    ).toHaveAttribute("href", "mailto:hello@example.com");
  });

  it("shows the contact phone number", () => {
    render(<Contact />);

    expect(screen.getByRole("link", { name: "5555555555" })).toHaveAttribute(
      "href",
      "tel:5555555555",
    );
  });
});
