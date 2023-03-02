import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/tarakanlogo.png'
import { Link } from "react-router-dom";

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
          <Link to='/' className='text-decoration-none'>
            <Nav.Link href="#" className="mx-2">BERANDA</Nav.Link>
          </Link>
          <Link to="/profile" className='text-decoration-none'>
            <Nav.Link href="#" className="mx-2">PROFILE</Nav.Link>
          </Link>
            <NavDropdown title="PELAYANAN" id="collasible-nav-dropdown" className="mx-2">
              <Link to="/pelayanan" className='text-decoration-none'><NavDropdown.Item href="#action/3.1">Pengajuan Pengujian</NavDropdown.Item></Link>
              <Link to="/pelayanan" className='text-decoration-none'><NavDropdown.Item href="#action/3.1">Jenis Jenis Pelayanan</NavDropdown.Item></Link>
              <Link to="/pelayanan" className='text-decoration-none'><NavDropdown.Item href="#action/3.1">Tarif & Biaya</NavDropdown.Item></Link>
            </NavDropdown>
            <Link to="/galeri" className='text-decoration-none'><Nav.Link href="#" className="mx-2">GALERI</Nav.Link></Link>
            <Link to="/contact" className='text-decoration-none'><Nav.Link href="#" className="mx-2">CONTACT</Nav.Link></Link>
            <Link to="/mekanisme" className='text-decoration-none'><Nav.Link href="#" className="mx-2">MEKANISME</Nav.Link></Link>
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