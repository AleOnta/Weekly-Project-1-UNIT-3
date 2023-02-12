import { Component } from "react";
import { Col, Row, Spinner, Alert } from "react-bootstrap";

import PosterComponent from "./PosterComponent";

class ShowsRowComponent extends Component {
  state = {
    films: [],
    isLoading: true,
    hasError: false,
    errorMessage: "",
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
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `C'è stato un errore, error --> ${response.status}`,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `Errore fatale durante il caricamento: ${error.message}`,
      });
    }
  };

  componentDidMount = () => {
    this.rowsFiller();
  };
  render() {
    return (
      <Row className="mt-4 rowComponent">
        {this.state.isLoading && (
          <div className="text-center spinnerContainer">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        <Col xs={12}>
          <h4>{this.props.typo}</h4>
        </Col>
        <Row className="d-flex justify-content-center justify-content-lg-between align-items-center mx-2 w-100">
          {this.state.films
            .slice(0, 6)

            .map((film) => {
              return <PosterComponent poster={film} key={film.imdbID} className="m-2" />;
            })}
          {this.state.hasError && <Alert variant="secondary">{this.state.errorMessage}</Alert>}
        </Row>
      </Row>
    );
  }
}

export default ShowsRowComponent;
