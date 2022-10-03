import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo10 from '../../img/Lemon.png';
import logo11 from '../../img/user.png';
import gambarlog from '../../img/logout.png';
import './NavBarSiswa.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jam from '../Jam/Jam';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Tanggal from '../Jam/Tanggal';


function NavBarSiswa() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <Container>
        <img className='logoNav' src={logo10}/>
        <Navbar.Brand href="/home">E-Learning</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto me12" >
            <Nav.Link href="/dasboardsiswa">Dasboard</Nav.Link>
            <Nav.Link href="/absensisiswa">Absensi</Nav.Link>
            <NavDropdown title="Pembelajaran" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/materisiswa">Materi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ruang Diskusi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kelas Virtual</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Akademik" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">E-Rapot</NavDropdown.Item>
              <NavDropdown.Item href="/kalenderakademik">
                Kalender Akademik
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/PengaturanSiswa">Pengaturan Akun</Nav.Link>
          </Nav>
          <Navbar.Text>
            <img className='loguser' src={logo11}/>
            <a>NISN : </a><a className='nuptk'>43758394989</a> 
            Halo, <a className='fw-bold' href="/pengaturanSiswa">YuuRei</a> 
          <Button className='logout2' variant="outline-danger" size='sm' onClick={handleShow}>Logout</Button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda ingin logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tidak
          </Button>
          <Button variant="danger" href="/home">
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <Container className='cont'>
      <Col className='jamT'>
      <Jam/>
        <Tanggal/></Col>
        </Container>
    </Navbar>
  );
}

export default NavBarSiswa;