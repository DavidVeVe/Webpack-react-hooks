import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
// import UserList from "./UserList";

// const VideoListItem = ({ video }) => (
//   <li>
//     <p>nombre de la pelicula: {video.name}</p>
//     <p>año: {video.year}</p>
//     <p>GENERO : {video.genre}</p>
//     <p>actor principal : {video.actor}</p>
//   </li>
// );

// const VideoList = props => (
//   <ul>
//     {props.videos.map(video => (
//       <VideoListItem key={video.id} video={video} />
//     ))}
//   </ul>
// );

const App = () => {
  const dat = [
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

  const [peliculas, setPeliculas] = useState(dat);
  const [inputValue, setInputValue] = useState("");

  const onAdd = () => {
    setPeliculas([{ name: inputValue }, ...peliculas]);
    setPeli("");
  };
  const onDelete = () => {
    const nuevo = [...peliculas];
    nuevo.pop();
    setPeliculas(nuevo);
  };

  return (
    <>
      <Header />

      <input
        value={peli}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <button onClick={onAdd}>Agregar</button>
      <button onClick={onDelete}>borrar</button>
      <VideoList videos={peliculas} />
      <Footer />
    </>
  );
};

const WhereToRenderReact = document.querySelector("#root");

ReactDOM.render(<App />, WhereToRenderReact);
