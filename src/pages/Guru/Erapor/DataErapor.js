import React,{useState} from 'react'
import { Button, Container, Col, Row, Form, Table } from 'react-bootstrap';
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import './Erapor.css'

const DataErapor = () => {
  return (
    <div>
      <NavBarGuru/>
      <Container className='mt-5'>
        <h5 className='fw-bold'>E-RAPOT</h5>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>NISN</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Nama Siswa</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Kelas</Form.Label>
            <Form.Select defaultValue="kelas">
              <option disabled selected></option>
              <option>...</option>
            </Form.Select>
            </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tingkat</Form.Label>
            <Form.Select defaultValue="Tingkat">
              <option disabled selected></option>
              <option>...</option>
            </Form.Select>
            </Form.Group>
        </Row>

        <Button className='mt-3' variant='success'>+ Tambah Data</Button>    
          
        <Table striped bordered hover size='sm' className='text-center mt-3'>
          <thead>
            <tr>
              <th>No</th>
              <th>Mata Pelajaran</th>
              <th>KKM</th>
              <th>Teori</th>
              <th>Praktek</th>
              <th>Predikat</th>
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

export default DataErapor