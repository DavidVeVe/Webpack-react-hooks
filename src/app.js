import React, { useState } from "react";

import List from "./components/list/listComponent";

const App = () => {
  const data = [
    {
      name: "aaaa",
      year: 1999,
      genre: "sci-fi",
      actor: "harrison",
      id: "345r64d5f6g7hjikoty7"
    },
    {
      name: "cccc",
      year: 1999,
      genre: "sci-fi",
      actor: "micheal fox",
      id: "345r6ty7"
    }
  ];

  const [peliculas, setPeliculas] = useState(data);
  const [inputValue, setInputValue] = useState("");

  const onAdd = () => {
    setPeliculas([{ name: inputValue }, ...peliculas]);
    setInputValue("");
  };
  const onDelete = () => {
    const nuevo = [...peliculas];
    nuevo.pop();
    setPeliculas(nuevo);
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <button onClick={onAdd}>Agregar</button>
      <button onClick={onDelete}>borrar</button>
      <List videos={peliculas} />
    </>
  );
};

export default App;
