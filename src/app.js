import React, { useState } from "react";

import List from "./components/list/listComponent";

const App = () => {
  // const data = [
  //   {
  //     name: "aaaa",
  //     year: 1999,
  //     genre: "sci-fi",
  //     actor: "harrison",
  //     id: "345r64d5f6g7hjikoty7"
  //   },
  //   {
  //     name: "cccc",
  //     year: 1999,
  //     genre: "sci-fi",
  //     actor: "micheal fox",
  //     id: "345r6ty7"
  //   }
  // ];

  const [games, setGames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onAdd = () => {
    setGames([{ name: inputValue }, ...games]);
    setInputValue("");
  };
  const onDelete = () => {
    const nuevo = [...games];
    nuevo.pop();
    setGames(nuevo);
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        name="name"
      />
      <input value={inputValue} name="gender" />
      <input value={inputValue} name="platform" />
      <button onClick={onAdd}>Agregar</button>
      <button onClick={onDelete}>borrar</button>
      <List games={games} />
    </>
  );
};

export default App;
