import React, { useState } from 'react'
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
import axios from 'axios';

const Register = () => {
  const [dataRegister, setDataRegister] = useState({
    nama: '',
    nisn: '',
    alamat: '',
    email: '',
    password: '',
    nama_ayah: 'nama ayah', //dummy
    nama_ibu: 'nama ibu', //dummy
    tempat: 'bandung', //dummy
    tgl_lahir: '2022-10-12', //dummy
    jns_kelamin: 'laki-laki', //dummy
    agama: 'tebak', //dummy
    telepon: '0812345678', //dummy
    kd_pos: '123456', //dummy
  });

  const handleRegister = () => {
    console.log(dataRegister);
    const resp = axios.post('/api/auth/register', dataRegister);
    resp.then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <NavigationBar />
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md='3' lg='5' className='order-2 order-lg-1 d-flex flex-column align-items-center mt-5'>

            <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-4">Registrasi</p>
            <p className="text-center h7 mb-4">Silahkan isi form dibawah ini untuk registrasi</p>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg' />
              <MDBInput label='Nama Lengkap' onChange={(e) => setDataRegister({ ...dataRegister, nama: e.target.value })} id='inputName' type='text' className='w-100 mg1' />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg' />
              <MDBInput label='NISN' onChange={(e) => setDataRegister({ ...dataRegister, nisn: e.target.value })} id='inputNisn' type='text' className='w-100 mg1' />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg' />
              <MDBInput label='Alamat' onChange={(e) => setDataRegister({ ...dataRegister, alamat: e.target.value })} id='inputAlamat' type='text' className='w-100 mg1' />
            </div>


            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg' />
              <MDBInput label='Email' onChange={(e) => setDataRegister({ ...dataRegister, email: e.target.value })} id='inputEmail' type='email' className='mg1' />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg' />
              <MDBInput label='Password' onChange={(e) => setDataRegister({ ...dataRegister, password: e.target.value })} id='inputPassword' type='password' className='mg1' />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg' />
              <MDBInput label='Repeat your password' id='inputRePassword' type='password' className='mg1' />
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Saya Setuju' />
            </div>

            <MDBBtn className='mb-4' onClick={handleRegister} color='warning' style={{ color: 'white' }} size='lg'>Register</MDBBtn>

          </MDBCol>

          <MDBCol md='10' lg='5' className='d-flex align-items-center md1'>
            <MDBCardImage src={logo} fluid className='md2' />
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
  )
}

export default Register