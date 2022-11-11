import React,{useState} from 'react'
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import './Erapor.css'
import { Table } from 'react-bootstrap';



const Erapor = () => {
  return (
    <div><NavBarGuru/>
    <h5><div className='MATERIDANTUGAS fw-bold'>E-RAPOT</div></h5>
    
    <Container>
    <Row className='rapotz'>
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Kelas</Form.Label>
          <Form.Select defaultValue="Silahkan Pilih Kelas">
            <option disabled selected>Silahkan Pilih Kelas</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Tingkat</Form.Label>
          <Form.Select defaultValue="Silahkan Pilih Tingkat">
            <option disabled selected>Silahkan Pilih Tingkat</option>
            <option>...</option>
          </Form.Select>
          </Form.Group>
      </Row>
      <Button className='mt-3' variant='success'>Tampilkan Data</Button>
    </Container>
    <Container>
        <Table striped bordered hover size='sm' className='text-center mt-3'>
      <thead>
        <tr>
        <th>No</th>
        <th>NISN</th>
        <th>Nama Siswa/i</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
      </Table>
      </Container>

    </div>
  )
}

export default Erapor