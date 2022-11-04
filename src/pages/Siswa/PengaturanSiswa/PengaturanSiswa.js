import React, { useEffect, useState } from 'react';
import NavBarSiswa from '../../../components/NavBarSiswa/NavBarSiswa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PengaturanSiswa = () => {

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.post('http://127.0.0.1:8000/api/auth/me')
    .then((response) => {
      setUser(response.data);
    })
  }

  useEffect(() => {
    if(!token){
      navigate('/login');
    }

    fetchData();
  },[]);

  return (
    <div><NavBarSiswa/>
     <h5><div className='labeldasb fw-bold'>Pengaturan Akun Siswa</div></h5>
    
    <Container className='card1 mb-5'>
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Profil</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        
      
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Nama Lengkap</Form.Label>
        <Form.Control name='nama'className='form' value={user.nama} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NISN</Form.Label>
        <Form.Control type="email" value={user.nisn} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Alamat Rumah</Form.Label>
        <Form.Control type="email" value={user.alamat}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Kode Pos</Form.Label>
        <Form.Control type="email" value={user.kd_pos}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={user.email}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Ayah</Form.Label>
        <Form.Control type="email" value={user.nama_ayah}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Ibu</Form.Label>
        <Form.Control type="email" value={user.nama_ibu}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tempat Lahir</Form.Label>
        <Form.Control type="email" value={user.tempat}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tanggal Lahir</Form.Label>
        <Form.Control type="email" value={user.tgl_lahir}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Jenis Kelamin</Form.Label>
        <Form.Control type="email" value={user.jns_kelamin}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Agama</Form.Label>
        <Form.Control type="email" value={user.agama}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nomor Telepon</Form.Label>
        <Form.Control type="email" value={user.telepon}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <h5>Silahkan Hubungi Wali Kelas Untuk Penggantian Data Diri</h5>
      </Form>
      </Card.Body>
    </Card>
    </Container>
    
    </div>
  )
}

export default PengaturanSiswa