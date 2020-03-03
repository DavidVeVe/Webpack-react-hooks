import React from "react";

const Item = ({ game }) => (
  <li>
    <p>Name: {game.name}</p>
    <p>Type: {game.type}</p>
    <p>Country: {game.country}</p>
  </li>
);

export default Item;
