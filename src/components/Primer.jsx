import { useState } from "react";

export function Primer() {
  const [name, setName] = useState("Sergi");
  const [isVisible, setIsVisible] = useState(true);
  //   let name = "Sergi";
  const hobbies = ["musica", "el mar", "la astrofísica"];

  function nameChange(name) {
    // name = "jose";
    // console.log(name);
    setName(name);
  }

  return (
    <>
      <h1>Hola</h1>
      <h2>
        Mi nombre es:
        <strong className={name.length > 4 ? "rojo" : "verde"}> {name}</strong>
      </h2>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => nameChange("Juana")}>cambiar nombre</button>
      <div>
        {isVisible && <h3>Esto es condicional</h3>}
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle condicional
        </button>
      </div>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((item, i) => (
          <li key={i}>
            {i} - {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
