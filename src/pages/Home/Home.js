import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import logo1 from '../../img/Lemon.png'
import logo2 from '../../img/sekolah.jpg'
import './Home.css';

function Home() {
  return (
    <div><NavigationBar/>
    
    <Row className='h101'>
    <img className='logo1' src={logo1}></img>
            <Col xs={2} sm={4} md={4} lg={8}><h1><div className='fw-bold'>E-Learning</div></h1>
            <div className='text6'>Learning & Monitoring System By OSHA TECHNOLOGY INDONESIA</div>
            <div>2022</div></Col>
           
            </Row>
            <Col md='4' lg='5' className='d-flex align-items-center md1'>
            <img src={logo2} fluid className='mt-6 logo3'/>
          </Col>
            </div>
  )
}

export default Home