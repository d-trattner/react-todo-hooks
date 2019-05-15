import React from "react";
import styled from "styled-components";

import Colors from "../../Colors";

import Selection from "./Selection";
import Done from "./Done";

const ListItemCell = styled.div`
  color: ${Colors.front};
  background-color: ${props =>
    props.selected ? Colors.highlight : Colors.middle};
  padding: 10px;
`;

export default function ListItem(props) {
  return (
    <>
      <ListItemCell selected={props.selected}>
        <Selection
          id={props.id}
          selected={props.selected}
          onSelect={props.onSelect}
        />
      </ListItemCell>
      <ListItemCell selected={props.selected}>{props.desc}</ListItemCell>
      <ListItemCell selected={props.selected}>
        <Done id={props.id} done={props.done} onDone={props.onDone} />
      </ListItemCell>
    </>
  );
}
