import React from "react";
import { useSelector } from "react-redux";
import { Container, List, Element } from "./styles";

const Home = () => {
  const words = useSelector((state) => state.words);

  return (
    <Container>
      <h3>Results:</h3>
      <div>
        <List>
          <Element>{words[2]}</Element>
          <Element>{words[1]}</Element>
          <Element>{words[0]}</Element>
        </List>
      </div>
    </Container>
  );
};

export default Home;
