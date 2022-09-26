import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo10 from '../../img/Lemon.png';
import logo11 from '../../img/user.png';
import './NavBarSiswa.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavBarSiswa() {
  return (
    <Navbar>
      <Container>
        <img className='logoNav' src={logo10}/>
        <Navbar.Brand href="/home">E-Learning</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
            <Nav.Link href="/dasboardsiswa">Dasboard</Nav.Link>
            <Nav.Link href="/absensisiswa">Absensi</Nav.Link>
            <NavDropdown title="Pembelajaran" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Materi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ruang Diskusi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ruang Virtual</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Akademik" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">E-Rapot</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kalender Akademik
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/absensisiswa">Pengaturan Akun</Nav.Link>
          </Nav>
          <Navbar.Text>
            <img className='loguser' src={logo11}/>
            Selamat Datang <a href="/pengaturan-akun">Yukicchi</a>
            , <a className='onlines' href=""  style={{color: '#FF0000'}}>Logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarSiswa;