import React, { useState } from 'react'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import { Button, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './AbsensiGuru.css';
import Time from '../../../components/Jam/Time';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const AbsensiGuru = () => {
  const [data, setData] = useState({})

  return (
    <div>
      <NavBarGuru/>
      
      <Container className='mt-5'>
        <Card>
          <Card.Header>
            <Card.Title><h5 className='labelabsen fw-bold'>ABSENSI GURU</h5></Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='jamabsen fw-bold'>JAM / HARI : </div>
            <div className='jamabsen'><Time /></div>

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
            </Form.Group>

            <Button variant="success" className='butoonabsen'>Absen</Button>
          </Card.Body>
        </Card>
        
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
          {data.length>0 
            ? data.map((item, key)=>{
              return (
                <tr>
                  <td>1</td>
                  <td>Senin, 14 November</td>
                  <td>09:00</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )
            }) 
            :(
              <tr>
                <td colSpan={5}>Data tidak ditemukan</td>
              </tr>
            )
          }
        </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default AbsensiGuru