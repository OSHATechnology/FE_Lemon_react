import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import logo1 from '../../img/Lemon.png'
import logo2 from '../../img/sekolah.jpg'
import './Home.css';

function Home() {
  return (
    <div>
      <NavigationBar/>
      <Container>
        <Row className='h101'>
          <Col>
            <div className='d-flex gap-3 align-items-center mb-3'>
              <img fluid className='logo1' src={logo1}></img>
              <h1 className='mt-4 fw-bold'>Lemon E-Learning</h1>
            </div>
            <div fluid className='hometext'>Learning & Monitoring System By OSHA TECHNOLOGY INDONESIA</div>
            <div fluid className='hometext'>2022</div>
          </Col>
          <Col className='d-flex align-items-center md1'>
            <img src={logo2} fluid className='mt-5 logo3'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home