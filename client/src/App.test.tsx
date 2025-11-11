import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders canvassing app", () => {
  render(<App />);
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

test("renders add contact button", () => {
  render(<App />);
  const addContact = screen.getByTestId("add-contact-button");
  expect(addContact).toBeInTheDocument();
});

test("renders contact list", () => {
  render(<App />);
  const contactList = screen.getByTestId("contact-list");
  expect(contactList).toBeInTheDocument();
});
