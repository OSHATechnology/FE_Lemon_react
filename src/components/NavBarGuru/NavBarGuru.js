import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo10 from '../../img/Lemon.png';
import logo11 from '../../img/user.png';
import gambarlog from '../../img/logout.png';
import './NavBarGuru.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jam from '../Jam/Jam';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Tanggal from '../Jam/Tanggal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function NavBarGuru() {



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <Container className='navtab'>
        <img className='logoNav1' src={logo10}/>
        <Navbar.Brand href="/home">E-Learning</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
        <Nav className="me-auto me13" color='black'>
            <Nav.Link href="/guru/dasboard">Dasboard</Nav.Link>
            <Nav.Link href="/guru/absensi">Absensi</Nav.Link>
            <NavDropdown title="Pembelajaran" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/guru/kelas-virtual">Kelas Virtual</NavDropdown.Item>
              <NavDropdown.Item href="/guru/ruang-diskusi">Ruang Diskusi</NavDropdown.Item>
              <NavDropdown.Item href="/guru/mata-pelajaran">Mata Pelajaran</NavDropdown.Item>
              <NavDropdown.Item href="/guru/materi">Materi Dan Tugas Siswa</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Akademik" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/daftarsiswa">Data Siswa</NavDropdown.Item>
              <NavDropdown.Item href="/guru/kelas">Kelas</NavDropdown.Item>
              <NavDropdown.Item href="/guru/erapor">E-Rapot</NavDropdown.Item>
              <NavDropdown.Item href="/kalenderguru">Kalender Akademik</NavDropdown.Item>
              
            </NavDropdown>

            <Nav.Link href="/pengaturanguru">Pengaturan Akun</Nav.Link>
          </Nav>
          <Navbar.Text>
            <img className='loguser2' src={logo11}/>
            Halo, <a className='fw-bold' href="/pengaturanguru"></a> 
          <Button className='logout4' variant="outline-danger" size='sm' onClick={handleShow}>Logout</Button>
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

export default NavBarGuru;