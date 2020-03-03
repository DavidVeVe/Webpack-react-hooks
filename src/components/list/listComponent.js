import React from "react";

import Item from "../item/itemComponent";

const List = props => (
  <ul>
    {props.games.map(game => (
      <Item key={Math.random()} game={game} />
    ))}
  </ul>
);

export default List;
