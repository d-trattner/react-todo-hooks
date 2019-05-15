import React from "react";
import styled from "styled-components";

import Colors from "../../Colors";

import ListItem from "./ListItem";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px;
  grid-gap: 0px;
`;

const ListHeaderCell = styled.div`
  color: ${Colors.front};
  background-color: ${Colors.highlight};
  padding: 10px;
  font-weight: bold;
`;

export default function List(props) {
  return (
    <ListContainer>
      <ListHeaderCell />
      <ListHeaderCell>Todo</ListHeaderCell>
      <ListHeaderCell>Done</ListHeaderCell>
      {props.items.map((item, index) => {
        return (
          <ListItem
            key={index}
            {...item}
            onSelect={props.onSelect}
            onDone={props.onDone}
          />
        );
      })}
    </ListContainer>
  );
}
