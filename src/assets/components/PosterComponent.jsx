import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

class PosterComponent extends Component {
  render() {
    return (
      <>
        <Col xs={12} sm={6} lg={4} xl={2} className="my-1 px-1 d-flex justify-content-center">
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
