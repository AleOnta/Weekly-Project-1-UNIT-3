import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class ShowsRowComponent extends Component {
  state = {
    elementID: "",
  };
  render() {
    return (
      <Row>
        <Col>{this.props.typo}</Col>
        <Col></Col>
      </Row>
    );
  }
}

export default ShowsRowComponent;
