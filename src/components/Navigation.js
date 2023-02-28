import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/tarakanlogo.png'

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="me-3" style={{width : "35px"}}/>
          Trakan Kota
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features" className="mx-2">BERANDA</Nav.Link>
            <Nav.Link href="#pricing" className="mx-2">PROFILE</Nav.Link>
            <NavDropdown title="PELAYANAN" id="collasible-nav-dropdown" className="mx-2">
              <NavDropdown.Item href="#action/3.1">Pengajuan Pengujian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Jenis Jenis Pelayanan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Tarif & Biaya</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">tarakankota@gmail.com</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;