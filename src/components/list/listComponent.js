import React from "react";

import Item from "../item/itemComponent";

const List = props => (
  <ul>
    {props.videos.map(video => (
      <Item key={video.id} video={video} />
    ))}
  </ul>
);

export default List;
