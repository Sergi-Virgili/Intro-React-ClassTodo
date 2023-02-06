import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NavBar } from "./components/layouts/NavBar";
import Router from "./components/Router";

test("renders learn react link", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/task/i);
  expect(linkElement).toBeInTheDocument();
});
