import logo from "./logo.svg";
import "./App.css";
import { Primer } from "./components/Primer";
import { Segundo } from "./components/Segundo";
import { DreamCRUD } from "./components/pages/DreamCRUD";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <Hero /> */}
      {/* <DreamCRUD /> */}
      <TodoList />
    </div>
  );
}

export default App;
