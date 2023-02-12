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
    showModal: false,
  };

  handelModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  modalCompiler = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=97daa7a1&i=${this.props.modalContent.imdbID}`);

      if (response.ok) {
        const data = await response.json();

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
        alert("errore nella response del modale: error -->", response.status);
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `Errore fatale durante il caricamento del modale: ${error.message}`,
      });
      alert("errore fatale durante il caricamento del modale: error -->", error.message);
    }
  };

  componentDidMount = () => {
    this.modalCompiler();
  };

  render() {
    return (
      <>
        <Button
          onClick={() => {
            this.handelModal();
          }}
          variant="danger"
          className="modalButton m-0 p-1"
        >
          More Info
        </Button>
        <Modal show={this.state.showModal}>
          <Modal.Header className="d-flex justify-content-center modalContainer">
            <Modal.Title className="modalHead">
              {!this.state.isLoading && <ModalUpperContent props={this.state.modalContent} />}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="d-flex justify-content-around align-items-center modalContainer modalBody">
            {!this.state.isLoading && <ModalLowerContent props={this.state.modalContent} />}
          </Modal.Body>

          <Modal.Footer className="d-flex justify-content-center modalContainer">
            <Button
              variant="danger"
              onClick={() => {
                this.handelModal();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
          {this.state.isLoading && (
            <div className="d-flex justify-content-center align-items-center spinnerContainer">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
        </Modal>
      </>
    );
  }
}
export default ModalComponent;
