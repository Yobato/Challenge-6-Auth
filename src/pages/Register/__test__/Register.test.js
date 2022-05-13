import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "../Register";

test("render judul halaman", () => {
  render(<Register />);
  const linkElement = screen.getByText(/Create New Account/i);
  expect(linkElement).toBeInTheDocument();
});

test("render label email", () => {
  render(<Register />);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});

test("render label password", () => {
  render(<Register />);
  const linkElement = screen.getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});