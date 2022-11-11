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
import './MataPelajaran.css'

function MataPelajaran() {

  return (
    <div><NavBarGuru/>
    <h5><div className='MATERIDANTUGAS fw-bold'>MATA PELAJARAN</div></h5>
    <Container>
    <Card>
      <Card.Body>
    <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>


          <Nav variant="pills" className="flex-column bakronn">
            <Nav.Item>
              <Nav.Link eventKey="first" className='mt-3 mb-3  warnaa2'>Tambah Mata Pelajaran</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='mt-3 mb-3 warnaa2'>Data Mata Pelajaran</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">

            <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Mata Pelajaran</Form.Label>
        <Form.Control type="email"/><Button className='mt-2 btn-sm'variant="success">+ Tambah Mapel</Button>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      </Form>
            </Tab.Pane>




            
            <Tab.Pane eventKey="second">

            <Container>
        <Table striped bordered hover size='sm' className='text-center'>
      <thead>
        <tr>
        <th>Mata Pelajaran</th>
        <th>Deskripsi Mapel</th>
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

export default MataPelajaran;