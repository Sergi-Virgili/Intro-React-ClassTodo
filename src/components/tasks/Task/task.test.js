import { render, screen } from "@testing-library/react";
import Task from ".";
import TaskModel from "../../../models/Task";
import Router from "../../Router";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

test("renders learn reac link", () => {
  const task = new TaskModel({});

  render(
    <BrowserRouter>
      <Task item={task} />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/default/i);
  expect(linkElement).toBeInTheDocument();
});
