import React from 'react'
import NavigationBar from '../../../components/NavigationBar/NavigationBar'
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
  import logo11 from '../../../img/Lemon.png'
  import './LoginGuru.css'
import { Button } from 'react-bootstrap';
import axios from "axios";
import react, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './LoginGuru.css';

const LoginGuru = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/home');
    }
  },[]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('email',email);
    formData.append('password',password);

    await axios.post('api/auth/gurulogin', formData)
    .then((response) => {

      console.log(response.data.access_token);
      localStorage.setItem('token',response.data.access_token);

      navigate('/guru/dasboard');

    }).catch((error) => {
      console.log(error.response.data);
      setValidation(error.response.data);
    })
  }

  return (
    <div><NavigationBar/>
    <MDBContainer fluid>
        <MDBRow>
          <MDBCol md='3' lg='5' className='order-2 order-lg-1 d-flex flex-column align-items-center col15'>

            <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-4">LOGIN GURU</p>
            <p className="text-center h7 mb-4">Selamat datang di E-learning Lemon para pengajar</p>
            <form onSubmit={loginHandler}>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Email' id='form1' type='text' className='w-100 mg1' name='emailguru' onChange={(e) => {setEmail(e.target.value)}}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password' className='mg1' name='passwordguru' onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            </form>
            <Button onClick={loginHandler} className='btn btn-success' type='submit' style={{color: 'white'}}>Login</Button>
          </MDBCol>
          <MDBCol md='1' lg='5' className='d-flex align-items-center md1'>
            <MDBCardImage src={logo11} fluid className='logologg'/>
          </MDBCol>

        </MDBRow>

  </MDBContainer></div>
  )
}

export default LoginGuru