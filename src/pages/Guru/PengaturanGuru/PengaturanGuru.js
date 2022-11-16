import React from 'react'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import { Container, Card, Nav, Form } from 'react-bootstrap';
import './PengaturanGuru.css';

const PengaturanGuru = () => {
  return (
    <div>
      <NavBarGuru/>
      <Container className='mt-5'>
        <h5 className='fw-bold'>Pengaturan Akun</h5>
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
                <Form.Label>NUPTK</Form.Label>
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
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default PengaturanGuru