import { Component } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import ModalLowerContent from "./ModalLowerContent";
import ModalUpperContent from "./ModalUpperContent";

class ModalComponent extends Component {
  state = {
    modalContent: {},
    isLoading: true,
    hasError: false,
    errorMessage: "",
  };

  modalCompiler = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=97daa7a1&i=${"tt0241527"}`);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          modalContent: data,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `C'è stato un errore nella response modale, error --> ${response.status}`,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `Errore fatale durante il caricamento del modale: ${error.message}`,
      });
    }
  };

  componentDidMount = () => {
    this.modalCompiler();
  };

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header className="d-flex justify-content-center modalContainer">
          <Modal.Title className="modalHead">
            {!this.state.isLoading && <ModalUpperContent props={this.state.modalContent} />}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex justify-content-around align-items-center modalContainer modalBody">
          {!this.state.isLoading && <ModalLowerContent props={this.state.modalContent} />}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center modalContainer">
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
        {this.state.isLoading && (
          <div className="d-flex justify-content-center align-items-center spinnerContainer">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </Modal.Dialog>
    );
  }
}
export default ModalComponent;
