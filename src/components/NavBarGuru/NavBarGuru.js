import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Modal, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import logo10 from '../../img/Lemon.png';
import logo11 from '../../img/user.png';
import Jam from '../Jam/Jam';
import Tanggal from '../Jam/Tanggal';
import axios from 'axios';
import './NavBarGuru.css';

function NavBarGuru() {
  
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.post('http://127.0.0.1:8000/api/auth/gurume')
    .then((response) => {
      setUser(response.data);
    })
  }

  useEffect(() => {
    if(!token){
      navigate('/loginguru');
    }

    fetchData();
  },[]);

  const logoutHandler = async () => {
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    await axios.post('http://127.0.0.1:8000/api/auth/gurulogout')
    .then(() => {
      localStorage.removeItem("token");

      navigate('/loginguru');
    })
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className='navgur'>
      <Container fluid className='navtab'>
        <img className='logoNav1' src={logo10}/>
        <Navbar.Brand href="/guru/dasboard" style={{  color: 'white' }}>E-Learning</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto ms-5">
            <Nav.Link href="/guru/dasboard">Dasboard</Nav.Link>
            <Nav.Link href="/guru/absensi">Absensi</Nav.Link>
            <NavDropdown title="Pembelajaran" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/guru/kelas-virtual">Kelas Virtual</NavDropdown.Item>
              <NavDropdown.Item href="/guru/ruang-diskusi">Ruang Diskusi</NavDropdown.Item>
              <NavDropdown.Item href="/guru/mata-pelajaran">Mata Pelajaran</NavDropdown.Item>
              <NavDropdown.Item href="/guru/jurnalguru">Jurnal</NavDropdown.Item>
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
            <img className='loguser2 me-2' src={logo11}/>
            <a style={{  color: 'white' }} className='fw-bold me-3' href="/pengaturanguru">Halo, {user.nama} </a> 
            <Button variant="danger" size='sm' onClick={handleShow}>Logout</Button>
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

export default NavBarGuru;