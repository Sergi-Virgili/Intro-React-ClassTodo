import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import TaskDetail from "../pages/TaskDetail/TaskDetail";
import TaskFormPage from "../pages/TaskForm/TaskFormPage";
import Page404 from "../pages/404/404";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tasks/:id" element={<TaskDetail />} />
      <Route path="/tasks/form" element={<TaskFormPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
