import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Background, Container, Btn } from "./styles";
import { reverseWod } from "../../state/actions";

const SearchBar = () => {
  const [text, setText] = useState("");

  let dispatch = useDispatch();

  const handleSend = () => {
    dispatch(reverseWod(text));
    setText("");
  };

  return (
    <Background>
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Insert text"
            aria-label="Insert text"
            aria-describedby="basic-addon2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Btn
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSend}
          >
            Send
          </Btn>
        </InputGroup>
      </Container>
    </Background>
  );
};

export default SearchBar;
