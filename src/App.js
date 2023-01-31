import "./App.css";
import { Hero } from "./components/layouts/Hero";
import { TodoList } from "./components/TodoList";
import { NavBar } from "./components/layouts/NavBar";
import { DreamCRUD } from "./components/pages/DreamCRUD";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <Hero />
      <DreamCRUD /> */}
      {/* <TodoList /> */}
      <Home />
    </div>
  );
}

export default App;
