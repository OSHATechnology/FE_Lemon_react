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
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { Container, FormSelect } from 'react-bootstrap';
import './Register.css';
import logo from '../../../img/Lemon.png'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [dataRegister, setDataRegister] = useState({
    nama: '',
    nisn: '',
    alamat: '',
    email: '',
    password: '',
    nama_ayah: '', //dummy
    nama_ibu: '', //dummy
    tempat: '', //dummy
    tgl_lahir: '', //dummy
    jns_kelamin: '', //dummy
    agama: '', //dummy
    telepon: '', //dummy
    kd_pos: '', //dummy
  });

  const [cek,setCek] = useState(false)

  const navigate = useNavigate()

  const handleRegister = () => {
    let timerInterval
    if(cek===true){
        console.log(dataRegister);
        const resp = axios.post('/api/auth/register', dataRegister);
        resp.then((response) => {
          Swal.fire({
            title: 'Register Berhasil!',
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            navigate('/login')
          })
          console.log(response);
        }).catch((error) => {
          console.log(error);
        }); 
    }else {
      Swal.fire({
        title: 'Harap centang setujui untuk melanjutkan',
        confirmButtonColor: '#ffc107',
        icon: 'warning',
      })
    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavigationBar />
      <MDBContainer className='mt-3'>
        <MDBRow>
          <MDBCol>
            <p className="text-center h1 fw-bold">Registrasi</p>
            <p className="text-center h7 mb-3">Silahkan isi form dibawah ini untuk registrasi</p>
            
            <Form.Group className="mb-3">
                <Form.Label>NISN</Form.Label>
                <Form.Control label='NISN' onChange={(e) => setDataRegister({ ...dataRegister, nisn: e.target.value })} id='inputNisn' type='number' className='w-100 mg1' />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control label='Nama Lengkap' onChange={(e) => setDataRegister({ ...dataRegister, nama: e.target.value })} id='inputName' type='text' className='w-100 mg1' />
              </Form.Group>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control label='Email' onChange={(e) => setDataRegister({ ...dataRegister, email: e.target.value })} id='inputEmail' type='email' className='mg1' />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setDataRegister({ ...dataRegister, password: e.target.value })} id='inputPassword' type='password' className='mg1' />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Alamat</Form.Label>
                <Form.Control label='Alamat' onChange={(e) => setDataRegister({ ...dataRegister, alamat: e.target.value })} id='inputAlamat' type='text' className='mg1' />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Kode Pos</Form.Label>
                <Form.Control label='Kode Pos' onChange={(e) => setDataRegister({ ...dataRegister, kd_pos: e.target.value })} id='inputPos' type='text' className='mg1' />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Nama Ayah</Form.Label>
                <Form.Control label='Nama Ayah' onChange={(e) => setDataRegister({ ...dataRegister, nama_ayah: e.target.value })} id='inputAyah' type='text' className='w-100 mg1' />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Nama Ibu</Form.Label>
                <Form.Control label='Nama Ibu' onChange={(e) => setDataRegister({ ...dataRegister, nama_ibu: e.target.value })} id='inputIbu' type='text' className='w-100 mg1' />
              </Form.Group>
            </Row>
            
            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Tempat Lahir</Form.Label>
                <Form.Control label='Tempat' onChange={(e) => setDataRegister({ ...dataRegister, tempat: e.target.value })} id='inputTempat' type='text' className='w-100 mg1' />
              </Form.Group>

              <Form.Group as={Col} className="w-100 mb-3">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control onChange={(e) => setDataRegister({ ...dataRegister, tgl_lahir: e.target.value })} id='inputTgl' type='date' className='w-100 mg1' />
              </Form.Group> 
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control label='Nomor Telepon' onChange={(e) => setDataRegister({ ...dataRegister, telepon: e.target.value })} id='inputTelepon' type='number' className='w-100 mg1' />
            </Form.Group>

            <Form.Group className="w-100 mb-3">
              <Form.Label htmlFor="disabledSelect">Jenis Kelamin</Form.Label>
              <Form.Select label='Jenis Kelamin' onChange={(e) => setDataRegister({ ...dataRegister, jns_kelamin: e.target.value })} id='inputKelamin' type='select' className='w-100 mg1' >
                <option disabled selected>- Silahkan Pilih -</option>
                <option>Laki-Laki</option>
                <option>perempuan</option>
              </Form.Select>
            </Form.Group>
            
            
            <Form.Group className="w-100 mb-3">
              <Form.Label htmlFor="disabledSelect">Agama</Form.Label>
              <Form.Select label='Agama' onChange={(e) => setDataRegister({ ...dataRegister, agama: e.target.value })} id='inputAgama' type='select' className='mg1' >
                <option disabled selected>- Silahkan Pilih -</option>
                <option>Islam</option>
                <option>Protestan</option>
                <option>Katolik</option>
                <option>Hindu</option>
                <option>Buddha</option>
                <option>Khonghucu</option>
              </Form.Select>
            </Form.Group>

            <div className='d-flex justify-content-center'>
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="my-3"
                label="Saya setuju dan ingin melanjutkan"
                onChange={(e) => setCek(e.target.checked)}
              />
            </div>

            <Button className='w-100 mb-5' variant="warning" size='lg' onClick={handleShow}>Registrasi</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Registrasi</Modal.Title>
              </Modal.Header>
              <Modal.Body>Apakah Data Anda Sudah Benar?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Kembali
                </Button>
                <Button variant="warning" onClick={handleRegister}>
                  Lanjutkan
                </Button>
              </Modal.Footer>
            </Modal>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
  )
}

export default Register