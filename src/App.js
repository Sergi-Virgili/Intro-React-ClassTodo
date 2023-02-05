import "./App.css";
import { NavBar } from "./components/layouts/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/404/404";
import TaskDetail from "./pages/TaskDetail/TaskDetail";
import TaskFormPage from "./pages/TaskForm/TaskFormPage";

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
        <Route path="/tasks/form" element={<TaskFormPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
