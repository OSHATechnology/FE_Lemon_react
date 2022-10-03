import React from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import {
    MDBBtn,
    MDBContainer,
    MDBCheckbox,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import logo11 from '../../img/Lemon.png'
  import './LoginGuru.css'
import { Button } from 'react-bootstrap';


const LoginGuru = () => {
  return (
    <div><NavigationBar/>
    <MDBContainer fluid>
        <MDBRow>
          <MDBCol md='3' lg='5' className='order-2 order-lg-1 d-flex flex-column align-items-center col15'>

            <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-4">LOGIN GURU</p>
            <p className="text-center h7 mb-4">Selamat datang di E-learning Lemon para pengajar</p>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='NISN' id='form1' type='text' className='w-100 mg1'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password' className='mg1'/>
            </div>

            <div className='mb-3'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Me' />
            </div>

            <a className='' href="/register" style={{color: 'darkgray'}} >Belum memiliki akun? Daftar disini</a>
            <a className='mb-5' href="\" style={{color: 'darkgray'}} >Anda seorang Guru? Login disini</a>

            <Button className='mx-2' href='/dasboardguru' variant='success' style={{color: 'white'}} size='lg'>Login</Button>

          </MDBCol>

          <MDBCol md='1' lg='5' className='d-flex align-items-center md1'>
            <MDBCardImage src={logo11} fluid className='mt-4 md2'/>
          </MDBCol>

        </MDBRow>

  </MDBContainer></div>
  )
}

export default LoginGuru