import React from 'react'
import NavBarSiswa from '../../../components/NavBarSiswa/NavBarSiswa';
import Searchbar from '../../../components/SearchBar/Searchbar';
import Selfie from '../../../components/Selfie/Selfie';
import { Button, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Tanggal from '../../../components/JamGuru/TanggalGuru';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './AbsensiSiswa.css'

const AbsensiSiswa = () => {
  return (
        <div><NavBarSiswa/>
         <h5><div className='labelabsensiswa fw-bold'>ABSENSI SISWA</div></h5>
         <Container>
    
          <Card.Body>
            <Col className='jamabsensiswa fw-bold'>JAM / HARI : </Col>
            <Col className='jamabsensiswa' ><Tanggal></Tanggal> </Col>
    
    
            <Form.Group className="mb-3 mt-3 ketabsensiswa">
              <Form.Label htmlFor="disabledSelect" className='fw-bold'>KETERANGAN :</Form.Label>
              <Form.Select id="keteranganAbsen">
                <option disabled selected>- Silahkan Pilih -</option>
                <option>Hadir</option>
                <option>Izin</option>
                <option>Sakit</option>
              </Form.Select>
            </Form.Group>
    
            <Form.Group className="mb-3 mt-3 ketabsensiswa">
            <Form.Label className='fw-bold' >CATATAN</Form.Label>
            <Form.Control type="Text" placeholder='Silahkan isi jika berhalangan hadir' />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
    
    
            <Button variant="warning" className='absensiswa'>Absen</Button>
    
    
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

export default AbsensiSiswa

