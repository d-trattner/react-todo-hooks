import React, { useState, useEffect } from "react";
import styled from "styled-components";

import uuid from "uuid";

import Colors from "../Colors";

import Header from "./Header";
import Menu from "./Menu";
import List from "./list/List";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Container = styled.div`
  overflow: hidden;
  width: 600px;
  height: auto;
  min-height: 400px;
  background-color: ${Colors.back};
  margin: 0 auto;
  border: 5px solid ${Colors.front};
  border-radius: 20px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.55);
`;

const AddContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  padding: ${props => (props.open ? "10" : "0")}px;
  transition: all 500ms;
  height: ${props => (props.open ? "45" : "0")}px;
  overflow: hidden;
`;

const StyledInput = styled.input`
  font-size: 18px;
  color: ${Colors.front};
  background-color: ${Colors.middle};
  border: 1px solid ${Colors.front};
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.55);
  padding: 10px;
  cursor: pointer;
`;

const StyledButton = styled.div`
  font-size: 18px;
  color: ${Colors.front};
  background-color: ${Colors.middle};
  border: 1px solid ${Colors.front};
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.55);
  padding: 10px;
  cursor: pointer;
  &:hover {
    margin-top: 1px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.55);
  }
`;

export default function Core() {
  const [addOpen, setAddOpen] = useState(false);
  const styledInputRef = React.createRef();

  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      desc: "Rasenmähen",
      done: true,
      selected: false
    },
    {
      id: uuid.v4(),
      desc: "Küche aufräumen",
      done: false,
      selected: false
    },
    {
      id: uuid.v4(),
      desc: "Kochen",
      done: false,
      selected: false
    }
  ]);

  function _itemCopy() {
    return JSON.parse(JSON.stringify(items));
  }

  function _itemsSelected() {
    return Array.from(items.filter(item => item.selected === true), x => x.id);
  }

  function onAdd() {
    console.log("onAdd");
    setAddOpen(!addOpen);
    console.log(styledInputRef);
    if (styledInputRef) styledInputRef.current.focus();
  }

  function onAddConfirm() {
    if (styledInputRef) {
      const value = styledInputRef.current.value;
      addItem(value);
    }
  }

  function addItem(value) {
    console.log("addItem", value);
    let copy = _itemCopy();
    copy = copy.concat({
      id: uuid.v4(),
      desc: value,
      done: false,
      selected: false
    });
    console.log(copy);
    setItems(copy);
  }

  useEffect(() => {
    setAddOpen(false);
  }, [items]);

  function onRemove() {
    console.log("onRemove");
    let copy = _itemCopy();
    const selected = _itemsSelected();
    if (selected.length) {
      copy = copy.filter(x => !x.selected);
      setItems(copy);
    }
  }

  function onSetDone() {
    console.log("onSetDone");
    let copy = _itemCopy();
    const selected = _itemsSelected();
    if (selected.length) {
      copy.forEach(x => {
        if (selected.includes(x.id)) {
          x.done = true;
        }
      });
      setItems(copy);
    }
  }

  function onSelect(id) {
    if (typeof id !== "undefined") {
      const ic = _itemCopy();
      const item = ic.find(x => x.id === id);
      item.selected = !item.selected;
      setItems(ic);
    } else {
      console.warn("onSelect: No Id present");
    }
  }

  function onDone(id) {
    if (typeof id !== "undefined") {
      const ic = _itemCopy();
      const item = ic.find(x => x.id === id);
      item.done = !item.done;
      setItems(ic);
    } else {
      console.warn("onDone: No Id present");
    }
  }

  return (
    <Wrapper>
      <Container>
        <Header />
        <Menu onAdd={onAdd} onRemove={onRemove} onSetDone={onSetDone} />
        <AddContainer open={addOpen}>
          <StyledInput ref={styledInputRef} />
          <StyledButton onClick={onAddConfirm}>
            <i className="far fa-plus-square" /> Add
          </StyledButton>
        </AddContainer>
        <List items={items} onSelect={onSelect} onDone={onDone} />
      </Container>
    </Wrapper>
  );
}
