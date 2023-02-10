import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ShowsRowComponent from "./ShowsRowComponent";
import UpperComponent from "./UpperComponent";

class MainComponent extends Component {
  render() {
    return (
      <Container fluid bg="dark" variant="dark" className="pt-3">
        <UpperComponent />
        <ShowsRowComponent typo="Trending Now" />
        <ShowsRowComponent typo="Watch it Again" />
        <ShowsRowComponent typo="New Releases" />
      </Container>
    );
  }
}

export default MainComponent;
