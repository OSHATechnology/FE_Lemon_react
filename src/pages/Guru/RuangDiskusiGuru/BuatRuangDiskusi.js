import React from 'react'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import './RuangDiskusiGuru.css'

const BuatKelasVirtual = () => {
  return (
    <div><NavBarGuru/>
     <h5><div className='labeltambahkelas fw-bold'>BUAT RUANG DISKUSI BARU</div></h5>
    <Container>
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
          <Form.Control type="text" placeholder="Keterangan Diskusi" />
        </Form.Group>
      </Row>
      </Form>
      <Button  href='/guru/ruang-diskusi' variant='secondary' size='sm' className='kelasVir2' >Kembali</Button>
      <Button variant='success' size='sm' className='kelasVir'>+ Tambah Kelas Virtual</Button>
      </Container>

    </div>
  )
}

export default BuatKelasVirtual