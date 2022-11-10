import React,{useState} from 'react'
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';

import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru';

import './MateriGuru.css';


function MateriGuru() {

  return (
    <div><NavBarGuru/>
    <h5><div className='MATERIDANTUGAS fw-bold'>MATERI DAN TUGAS SISWA</div></h5>
    <Container>
    <Card>
      <Card.Body>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>


          <Nav variant="pills" className="flex-column bakron">
            <Nav.Item>
              <Nav.Link eventKey="first" className='mt-3 mb-3 warna'>Upload Materi dan Tugas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='mt-3 mb-3 warna'>Tugas Siswa</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='mt-3 mb-3 warna'>Modul Guru</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">

            <Form>
      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Mata Pelajaran</Form.Label>
          <Form.Select id="mapel">
            <option disabled selected>- Silahkan Pilih -</option>
            <option>Bahasa Indonesia</option>
            <option>Bahasa Inggris</option>
            <option>Bahasa Sunda</option>
            <option>Matematika</option>
            <option>IPS</option>
            <option>IPA</option>
            <option>PJOK</option>
            <option>Pendidikan Agama Islam</option>
            <option>Pendidikan Pancasila</option>
            <option>Informatika</option>
            <option>Seni Dan Prakarya</option>
          </Form.Select>
          </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Kelas</Form.Label>
          <Form.Select id="kelas">
            <option disabled selected>- Silahkan Pilih -</option>
            <option>X</option>
            <option>XI</option>
            <option>XII</option>
          </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Judul Materi</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Deskripsi Materi</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Judul tugas</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Deskripsi tugas</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>


      <h6><div className='fw-bold'>Upload Materi</div></h6>
    <div className='container'>
    <br></br>
    </div>
    <Button type="submit" id="Uploadbtn" className="btn btn-primary">Upload Materi</Button>
            </Tab.Pane>



            <Tab.Pane eventKey="second">

            <Container>
        <Table striped bordered hover size='sm' className='text-center'>
      <thead>
        <tr>
        <th>Nama</th>
        <th>Mata Pelajaran</th>
        <th>Kelas</th>
        <th>File Tugas</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      </Table>
      </Container>
            </Tab.Pane>



            <Tab.Pane eventKey="third">

            <Container>
        <Table striped bordered hover size='sm' className='text-center'>
      <thead>
        <tr>
        <th>Nama</th>
        <th>Mata Pelajaran</th>
        <th>Kelas</th>
        <th>File Tugas</th>
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

export default MateriGuru;