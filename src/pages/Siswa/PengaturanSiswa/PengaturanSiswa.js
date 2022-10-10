import React from 'react'
import NavBarSiswa from '../../../components/NavBarSiswa/NavBarSiswa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const PengaturanSiswa = () => {
  return (
    <div><NavBarSiswa/>
     <h5><div className='labeldasb fw-bold'>Pengaturan Akun Siswa</div></h5>
    
    <Container className='card1'>
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Lengkap</Form.Label>
        <Form.Control type="email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NISN</Form.Label>
        <Form.Control type="email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Alamat</Form.Label>
        <Form.Control type="email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Agama</Form.Label>
          <Form.Select id="agama">
            <option>- Silahkan Pilih -</option>
            <option>Islam</option>
            <option>Kristen</option>
            <option>Hindu</option>
          </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Jenjang Sekolah</Form.Label>
          <Form.Select id="agama">
            <option>- Silahkan Pilih -</option>
            <option>SD</option>
            <option>SMP</option>
            <option>SMA</option>
          </Form.Select>
        </Form.Group>
        <button type="submit" className='btn btn-primary btn-sm'>
          Save
        </button>
      </Form>
      </Card.Body>
    </Card>
    </Container>
    
    </div>
  )
}

export default PengaturanSiswa