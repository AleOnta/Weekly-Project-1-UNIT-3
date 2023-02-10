import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class PosterComponent extends Component {
  render() {
    return (
      <Col className="p-0 mr-2 filmCard">
        <Card className="myCard">
          <Card.Img variant="top" src={this.props.poster.Poster} className="rowPoster" />
        </Card>
      </Col>
    );
  }
}

export default PosterComponent;
