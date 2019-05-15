import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  font-size: 150%;
  cursor: pointer;
`;

export default function Done(props) {
  function click() {
    console.log("Done", props.id);
    props.onDone(props.id);
  }
  return props.done ? (
    <Icon className="fas fa-check-circle" onClick={click} />
  ) : (
    <Icon className="fas fa-circle" onClick={click} />
  );
}
