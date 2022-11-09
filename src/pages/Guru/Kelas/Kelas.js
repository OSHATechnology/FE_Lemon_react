import React,{useState} from 'react'
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru';


function Kelas() {

  return (
    <div><NavBarGuru/>
    <h5><div className='MATERIDANTUGAS fw-bold'>KELAS</div></h5>
    <Container>
    <Card>
      <Card.Body>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>


          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className='mt-3 mb-3'>Tambah Kelas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='mt-3 mb-3'>Data Kelas</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">

            <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Kelas</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tingkat</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button variant="success" className='mt-2 btn-sm'>+ Tambah Kelas</Button>

      </Form>
            </Tab.Pane>




            
            <Tab.Pane eventKey="second">

            <Container>
        <Table striped bordered hover size='sm' className='text-center'>
      <thead>
        <tr>
        <th>Nama Kelas</th>
        <th>Tingkat</th>
        <th>Jumlah Siswa</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      </Table>
      </Container>


            </Tab.Pane>
            </Tab.Content>
            
        </Col>
      </Row>
    </Tab.Container>
    </Card.Body>
      </Card>
    </Container>
    </div>
  );
}

export default Kelas;