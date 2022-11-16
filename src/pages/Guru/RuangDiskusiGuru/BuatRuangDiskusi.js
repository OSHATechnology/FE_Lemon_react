import React from 'react'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import './RuangDiskusiGuru.css'

const BuatRuangDiskusi = () => {
  return (
    <div>
      <NavBarGuru/>
      
      <Container className='mt-5'>
        <h5><div className='labeltambahkelas fw-bold'>BUAT RUANG DISKUSI BARU</div></h5>
        <Form>
          <Row className="mb-4 mt-5 kelasV">
            <Form.Group as={Col}>
              <Form.Label>Judul Diskusi</Form.Label>
              <Form.Control type="text" placeholder="Masukan Judul" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Kelas</Form.Label>
              <Form.Select defaultValue="Silahkan pilih Kelas">
                <option disabled selected>Silahkan pilih Kelas</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className='kelasV'>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Mata Pelajaran</Form.Label>
              <Form.Select defaultValue="Silahkan Pilih Mapel">
                <option disabled selected>Silahkan Pilih Mapel</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Keterangan</Form.Label>
              <Form.Control as="textarea" style={{  height: '100px' }} placeholder="Keterangan Diskusi" />
            </Form.Group>
          </Row>
          
          <div className='mt-5'>
            <Button  href='/guru/ruang-diskusi' variant='secondary' size='sm' className='me-3' >Kembali</Button>
            <Button variant='success' size='sm'>+ Tambah Kelas Virtual</Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default BuatRuangDiskusi