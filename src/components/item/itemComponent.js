import React from "react";

const Item = ({ video }) => (
  <li>
    <p>nombre de la pelicula: {video.name}</p>
    <p>año: {video.year}</p>
    <p>GENERO : {video.genre}</p>
    <p>actor principal : {video.actor}</p>
  </li>
);

export default Item;
