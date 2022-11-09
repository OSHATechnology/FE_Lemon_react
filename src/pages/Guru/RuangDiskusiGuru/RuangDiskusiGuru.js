import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import './RuangDiskusiGuru.css'
import { Table } from 'react-bootstrap';

const RuangDiskusiGuru = () => {
  return (
    <div><NavBarGuru/>
    <h5><div className='labelabsen fw-bold'>RUANG DISKUSI</div></h5>
    <Container>
        <Col>
    <Button href='/guru/ruang-diskusi/buat-ruang-diskusi' variant='success' size='sm' className='tambahruang'>+ Buat Ruang Baru</Button>
    </Col>

    <Container>
        <Table striped bordered hover size='lg' className='text-center mt-4'>
      <thead>
        <tr>
        <th>No</th>
        <th>Judul</th>
        <th>Mata Pelajaran</th>
        <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      </Table>
      </Container>

    </Container>
    </div>
  )
}

export default RuangDiskusiGuru