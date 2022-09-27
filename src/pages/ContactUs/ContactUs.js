import React from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import { Col, Container, Row } from 'react-bootstrap'
import './ContactUs.css';

function ContactUs() {
  return (
    <div><NavigationBar/>
    <Row className='h110 background10'>
            <Col xs={2} sm={4} md={4} lg={8}><h1><div className='text1'>OSHA Technology Indonesia</div></h1>
            <h3><div className='text1'>BANDUNG</div></h3>
            <div className='text2'>Griya Cikutra Blok-B No.08, Cibeunying, Bandung, Jawa Barat</div>
            <div className='text2'>Phone : +62 878 1770 0088</div>
            <div className='text2'>Email : info@oshatechnology.com</div></Col>
           
            </Row>
    </div>
  )
}

export default ContactUs