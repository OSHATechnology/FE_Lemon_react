import React from 'react'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './PengaturanGuru.css';

const PengaturanGuru = () => {
  return (
    <div><NavBarGuru/>
    <h5><div className='labeldasb fw-bold'>Pengaturan Akun</div></h5>
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
        <Form.Control type="email" placeholder="Masukan Nama Lengkap" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NISN</Form.Label>
        <Form.Control type="email" placeholder="Masukan NISN" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Alamat</Form.Label>
        <Form.Control type="email" placeholder="Masukan Alamat" />
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

      </Form>
      </Card.Body>
    </Card>
    </Container>
    </div>
  )
}

export default PengaturanGuru