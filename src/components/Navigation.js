import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/tarakanlogo.png'
import { Link } from "react-router-dom";
import React from 'react';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark"  fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={logo} className="me-3" style={{width : "35px"}}/>
          Trakan Kota
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className='text-decoration-none'>
              <span className="mx-2 nav-link">BERANDA</span>
            </Link>
            <Link to="/profile" className='text-decoration-none'>
              <span className="mx-2 nav-link">PROFILE</span>
            </Link>
            <NavDropdown title="PELAYANAN" id="collasible-nav-dropdown" className="mx-2">
              <Link to="/formpengajuan" className='text-decoration-none'><NavDropdown.Item href="#action/3.1">Pengajuan Pengujian</NavDropdown.Item></Link>
              <Link to="/mekanisme" className='text-decoration-none'><NavDropdown.Item href="#action/3.1">Mekanisme Pengajuan</NavDropdown.Item></Link>
              <Link to="/pelayanan" className='text-decoration-none'><NavDropdown.Item href="#action/3.1">Jenis Jenis Pelayanan</NavDropdown.Item></Link>
              {/* <Link to="/pelayanan" className='text-decoration-none'><NavDropdown.Item href="#action/3.1">Tarif & Biaya</NavDropdown.Item></Link> */}
            </NavDropdown>
            <Link to="/galeri" className='text-decoration-none'>
              <span className="mx-2 nav-link">GALERI</span>
            </Link>
            {/* <Link to="/mekanisme" className='text-decoration-none'>
              <span className="mx-2 nav-link">MEKANISME</span>
            </Link> */}
            <Link to="/contact" className='text-decoration-none'>
              <span className="mx-2 nav-link">CONTACT</span>
            </Link>

            <Link to="/admin" className='text-decoration-none'>
              <span className="mx-2 nav-link">ADMIN</span>
            </Link>
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