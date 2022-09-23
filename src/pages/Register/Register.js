import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import './Register.css';
import logo from '../../img/Lemon.png'

const Register = () => {
  return (
    <div>
    <NavigationBar/>
    <MDBContainer fluid>
        <MDBRow>
          <MDBCol md='3' lg='5' className='order-2 order-lg-1 d-flex flex-column align-items-center mt-5'>

            <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-4">Registrasi</p>
            <p className="text-center h7 mb-4">Silahkan isi form dibawah ini untuk registrasi</p>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Nama Lengkap' id='form1' type='text' className='w-100 mg1'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='NISN' id='form1' type='text' className='w-100 mg1'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Alamat' id='form1' type='text' className='w-100 mg1'/>
            </div>


            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Email' id='form2' type='email' className='mg1'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password' className='mg1'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Repeat your password' id='form4' type='password' className='mg1'/>
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Saya Setuju' />
            </div>

            <MDBBtn className='mb-4' color='warning' style={{color: 'white'}} size='lg'>Register</MDBBtn>

          </MDBCol>

          <MDBCol md='10' lg='5' className='d-flex align-items-center md1'>
            <MDBCardImage src={logo} fluid className='md2'/>
          </MDBCol>

        </MDBRow>

  </MDBContainer>
  </div>
  )
}

export default Register