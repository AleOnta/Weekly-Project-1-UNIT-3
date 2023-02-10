import { Component } from "react";
import { Col, Row } from "react-bootstrap";

import PosterComponent from "./PosterComponent";

class ShowsRowComponent extends Component {
  state = {
    films: [],
  };

  // api key: 97daa7a1

  rowsFiller = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=97daa7a1&s=${this.props.toFetch}`);

      if (response.ok) {
        const array = await response.json();
        const filmsArray = await array.Search;
        this.setState({
          films: filmsArray,
        });
      } else {
        alert("Qualcosa non è andato a buon fine");
      }
    } catch (error) {
      alert("OopS i did it again", error);
    }
  };

  componentDidMount = () => {
    this.rowsFiller();
  };
  render() {
    return (
      <Row className="mt-4">
        <Col xs={12}>
          <h4>{this.props.typo}</h4>
        </Col>
        <Col className="d-flex justify-content-between align-items-center">
          {this.state.films
            .slice(0, 6)

            .map((film) => {
              return <PosterComponent poster={film} key={film.imdbID} className="m-2" />;
            })}
        </Col>
      </Row>
    );
  }
}

export default ShowsRowComponent;
