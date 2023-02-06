import "./App.css";
import { NavBar } from "./components/layouts/NavBar";

import Router from "./components/Router";

function App() {
  return (
    <div className="app">
      <NavBar />

      {/* <Hero />
      <DreamCRUD /> */}
      {/* <TodoList /> */}
      <Router />
    </div>
  );
}

export default App;
