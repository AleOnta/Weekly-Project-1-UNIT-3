import { Component } from "react";
import { Container } from "react-bootstrap";
import ShowsRowComponent from "./ShowsRowComponent";
import UpperComponent from "./UpperComponent";

class MainComponent extends Component {
  render() {
    return (
      <Container fluid bg="dark" variant="dark" className="pt-3">
        <UpperComponent />
        <ShowsRowComponent typo="Trending Now" toFetch="harry%20potter" />
        <ShowsRowComponent typo="Watch it Again" toFetch="teletubbies" />
        <ShowsRowComponent typo="New Releases" toFetch="dragon%20ball" />
      </Container>
    );
  }
}

export default MainComponent;
