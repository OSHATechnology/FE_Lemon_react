import React from 'react'
import './NavigationBar.css';
import { Container, Nav, Navbar, NavDropdown  } from 'react-bootstrap';
import logo from '../../img/OSHA.png';
import logo2 from '../../img/Technology.png';
import logo3 from '../../img/Lemon.png';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="https://oshatechnology.com/" target="_blank">
            <img className='logos' src={logo}/>
            <img className='logos2' src={logo2}/>
          </Navbar.Brand>
          <Navbar.Brand href="/home">
            <img className='logos3' src={logo3}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='nav1'>
            <Nav className="navbar-text">
              <Nav.Link className='n1' href="/home">Home</Nav.Link>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login Siswa</NavDropdown.Item>
                <NavDropdown.Item href="/loginguru">Login Guru</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Register" id="basic-nav-dropdown">
                <NavDropdown.Item href="/register">Register Siswa</NavDropdown.Item>
                <NavDropdown.Item href="/register/guru">Register Guru</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="/tentang">E-Learning</NavDropdown.Item>
                <NavDropdown.Item href="https://oshatechnology.com/about" target="_blank">
                  OSHA Technology
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar