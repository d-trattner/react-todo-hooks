import React from "react";
import styled from "styled-components";

import Colors from "../Colors";

const HeaderContainer = styled.header`
  font-size: 30px;
  color: ${Colors.middle};
  min-height: 20px;
  padding: 10px;
  background-color: ${Colors.front};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

export default function Header() {
  return <HeaderContainer>Todos with React Hooks</HeaderContainer>;
}
