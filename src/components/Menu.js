import React from "react";
import styled from "styled-components";

import Colors from "../Colors";

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  padding: 10px;
  min-height: 45px;
`;

const Item = styled.div`
  font-size: 18px;
  color: ${Colors.front};
  background-color: ${Colors.middle};
  border: 1px solid ${Colors.front};
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
  padding: 10px;
  cursor: pointer;
  &:hover {
    margin-top: 1px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  }
`;

const Menu = props => {
  return (
    <MenuContainer>
      <Item onClick={props.onAdd}>
        <i className="far fa-plus-square" /> Add
      </Item>
      <Item onClick={props.onRemove}>
        <i className="fas fa-trash" /> Remove
      </Item>
      <Item onClick={props.onSetDone}>
        <i className="fas fa-clipboard-check" /> Mark Done
      </Item>
    </MenuContainer>
  );
};

export default Menu;
