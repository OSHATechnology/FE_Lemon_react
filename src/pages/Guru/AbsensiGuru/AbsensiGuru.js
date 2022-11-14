import React from 'react'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import { Button, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './AbsensiGuru.css';
import Tanggal from '../../../components/JamGuru/TanggalGuru';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const AbsensiGuru = () => {
  return (
    <div><NavBarGuru/>
     <h5><div className='labelabsen fw-bold'>ABSENSI GURU</div></h5>
     <Container>

      <Card.Body>
        <Col className='jamabsen fw-bold'>JAM / HARI : </Col>
        <Col className='jamabsen' ><Tanggal></Tanggal> </Col>


        <Form.Group className="mb-3 mt-3 ketabsen">
          <Form.Label htmlFor="disabledSelect" className='fw-bold'>KETERANGAN :</Form.Label>
          <Form.Select id="keteranganAbsen">
            <option disabled selected>- Silahkan Pilih -</option>
            <option>Hadir</option>
            <option>Izin</option>
            <option>Sakit</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 mt-3 ketabsen">
        <Form.Label className='fw-bold' >CATATAN</Form.Label>
        <Form.Control type="Text" placeholder='Silahkan isi jika berhalangan hadir' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>


        <Button variant="success" className='butoonabsen'>Absen</Button>


        <Container>
        <Table striped bordered hover size='lg' className='text-center mt-4'>
      <thead>
        <tr>
        <th>No</th>
        <th>Hari/Tanggal</th>
        <th>Jam</th>
        <th>Keterangan</th>
        <th>Catatan</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      </Table>
      </Container>

        </Card.Body>
        </Container>
    
    </div>
  )
}

export default AbsensiGuru