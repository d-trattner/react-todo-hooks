import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  font-size: 150%;
  cursor: pointer;
`;

export default function Selection(props) {
  function click() {
    console.log("Selection", props.id);
    props.onSelect(props.id);
  }
  return props.selected ? (
    <Icon className="fas fa-check-circle" onClick={click} />
  ) : (
    <Icon className="fas fa-circle" onClick={click} />
  );
}
