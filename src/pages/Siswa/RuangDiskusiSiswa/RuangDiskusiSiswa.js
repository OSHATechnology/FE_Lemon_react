import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import './RuangDiskusiSiswa.css'
import { Table } from 'react-bootstrap';
import NavBarSiswa from '../../../components/NavBarSiswa/NavBarSiswa';

const RuangDiskusiSiswa = () => {
  return (
    <div><NavBarSiswa/>
    <h5><div className='labelabsen fw-bold'>RUANG DISKUSI</div></h5>
    <Container>
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

export default RuangDiskusiSiswa