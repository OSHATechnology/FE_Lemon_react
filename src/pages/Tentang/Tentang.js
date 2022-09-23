import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import logo99 from '../../img/Lemon.png'
import logo98 from '../../img/OSHA.png'
import './Tentang.css';

function Tentang() {
  return (
    <div>
        <NavigationBar/>
        
            <Row className='justify-content-center align-items-center h200 background1'>
            <Col xs={12} sm={12} md={7} lg={7}><h1><div className='text1 fw-bold'>E-Learning</div></h1>
            <h5><div className='text1 fw-bold'>Study & Monitoring System</div></h5>
            <div className='text2 h6'> Lemon E-Learning Adalah Website yang dibuat PT.OSHA Technology untuk memudahkan sekolah dalam memonitoring dan management pembelajaran online. e-learning dilakukan melalui media perantara internet berbasis web. Jadi, semua materi, kuis, dan bahan ajar bisa kamu akses melalui sebuah situs web.</div></Col>
            <Col className='d-flex justify-content-center align-item-center' xs={10} sm={10} md={5} lg={3}><img className='logo99' src={logo99}/></Col>
            </Row>
        
            <Row className='justify-content-center align-items-center h200 background2'>
            <Col xs={12} sm={12} md={7} lg={9}><h1><div className='text3 fw-bold'> PT. OSHA Technology</div></h1>
            <div className='text2 h6'> OSHA technology is a digital technology & marketing services company committed to continuing to collaborate closely together customers to improve, accelerate business performance and create real value. With professional consultants and developers, we can send the required professional staff according to their skills, tools, and the right technology to deliver innovation.</div></Col>
            <Col className='d-flex justify-content-center align-item-center' xs={10} sm={10} md={5} lg={3}><img className='logo98' src={logo98}/></Col>
            
            </Row>
            </div>

  )
}

export default Tentang