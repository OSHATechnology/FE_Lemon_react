import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../../img/OSHA.png';
import logo2 from '../../img/Technology.png';
import logo3 from '../../img/Lemon.png';
import axios from "axios";
import { useState, useEffect } from 'react';

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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-text nav1">
            <Nav.Link className='n1' href="/home">Home</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login Siswa</NavDropdown.Item>
              <NavDropdown.Item href="/loginguru">Login Guru</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
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