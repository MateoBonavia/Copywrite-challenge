import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

export const Container = styled.div`
  background-color: #fff;
  padding: 50px;
  margin: auto;
  margin-top: 50px;
  height: 500px;
  width: 1200px;
`;

export const List = styled(ListGroup)`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

export const Element = styled(ListGroup.Item)`
  width: 700px;
  height: 50px;
`;
