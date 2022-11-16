import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Button, Modal } from 'react-bootstrap'
import logo10 from '../../img/Lemon.png';
import logo11 from '../../img/user.png';
import Jam from '../Jam/Jam';
import Tanggal from '../Jam/Tanggal';
import axios from 'axios';
import './NavBarSiswa.css';

// import userEvent from '@testing-library/user-event';


function NavBarSiswa() {

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.post('http://127.0.0.1:8000/api/auth/me')
    .then((response) => {
      setUser(response.data);
    })
  }

  useEffect(() => {
    if(!token){
      navigate('/login');
    }

    fetchData();
  },[]);

  const logoutHandler = async () => {
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    await axios.post('http://127.0.0.1:8000/api/auth/logout')
    .then(() => {
      localStorage.removeItem("token");

      navigate('/login');
    })
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className='navsis'>
      <Container fluid>
        <img className='logoNav' src={logo10}/>
        <Navbar.Brand href="/siswa/dasboard" className='fw-bold' style={{ color: '#926e04' }}>E-Learning</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto ms-5" >
            <Nav.Link href="/siswa/dasboard">Dasboard</Nav.Link>
            <Nav.Link href="/absensisiswa">Absensi</Nav.Link>
            <NavDropdown title="Pembelajaran" id="collasible-nav-dropdown" className='linknav'>
              <NavDropdown.Item  href="/materisiswa">Materi</NavDropdown.Item>
              <NavDropdown.Item href="/siswa/ruang-diskusi">Ruang Diskusi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Kelas Virtual</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Akademik" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">E-Rapot</NavDropdown.Item>
              <NavDropdown.Item href="/kalenderakademik">Kalender Akademik</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/pengaturansiswa">Pengaturan Akun</Nav.Link>
          </Nav>
          <Navbar.Text>
            <img className='loguser me-2' src={logo11}/>
            <a className='fw-bold' href="/pengaturanSiswa" style={{ color: '#926e04' }}> Halo, {user.nama}</a> 
            <Button className='ms-3' variant="danger" size='sm' onClick={handleShow}>Logout</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Logout</Modal.Title>
              </Modal.Header>
              <Modal.Body>Apakah anda ingin logout?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Tidak
                </Button>
                <Button variant="danger" onClick={logoutHandler}>
                  Logout
                </Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Text>
        </Navbar.Collapse>
        <div className='ms-5'>
          <Jam/>
          <Tanggal/>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarSiswa;