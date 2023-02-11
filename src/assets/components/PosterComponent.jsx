import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

class PosterComponent extends Component {
  render() {
    return (
      <>
        <Col className="p-0 mr-2 filmCard">
          <Card className="myCard">
            <Card.Img variant="top" src={this.props.poster.Poster} className="rowPoster" />
            <ModalComponent modalContent={this.props.poster} />
          </Card>
        </Col>
      </>
    );
  }
}

export default PosterComponent;
