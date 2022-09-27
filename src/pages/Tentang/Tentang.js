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
            <Col xs={12} sm={12} md={7} lg={7}><h1><div className='fw-bold'>E-Learning</div></h1>
            <h5><div className='fw-bold'>Study & Monitoring System</div></h5>
            <div className='h6'> Lemon E-Learning Adalah Website yang dibuat PT.OSHA Technology untuk memudahkan sekolah dalam memonitoring dan management pembelajaran online. e-learning dilakukan melalui media perantara internet berbasis web. Jadi, semua materi, kuis, dan bahan ajar bisa kamu akses melalui sebuah situs web.</div></Col>
            <Col className='d-flex justify-content-center align-item-center' xs={10} sm={10} md={5} lg={3}><img className='logo99' src={logo99}/></Col>
            </Row>
            </div>

  )
}

export default Tentang