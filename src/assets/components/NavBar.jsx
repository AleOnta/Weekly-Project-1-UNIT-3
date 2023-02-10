import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { BsSearch, BsFillPersonFill, BsFillBellFill } from "react-icons/bs";
import { ReactComponent as Logo } from "../imgs/NetflixLogo.svg";

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container fluid className="p-0">
        <Row className="d-flex justify-content-between align-items-center w-100 p-0">
          <Col className="d-flex align-items-center p-0">
            <Navbar.Brand href="#home">
              <Logo id="NavLogo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#" className="NavbarLink">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="NavbarLink active">
                  TV Shows
                </Nav.Link>
                <Nav.Link href="#" className="NavbarLink">
                  Movies
                </Nav.Link>
                <Nav.Link href="#" className="NavbarLink">
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#" className="NavbarLink">
                  My list
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col className="d-flex justify-content-end align-items-center p-0">
            <BsSearch className="NavbarIcon" />
            <div id="NavbarKids">KIDS</div>
            <BsFillBellFill className="NavbarIcon" />
            <BsFillPersonFill className="NavbarIcon" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
