import "./App.css";
import { Hero } from "./components/layouts/Hero";
import { TodoList } from "./components/TodoList";
import { NavBar } from "./components/layouts/NavBar";
import { DreamCRUD } from "./components/pages/DreamCRUD";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Link, Route, Routes } from "react-router-dom";
import Page404 from "./pages/404/404";
import TaskDetail from "./pages/TaskDetail/TaskDetail";

function App() {
  return (
    <div className="app">
      <NavBar />

      {/* <Hero />
      <DreamCRUD /> */}
      {/* <TodoList /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        {/* <Route path="/tasks/create" element={<TaskFormPage />} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
