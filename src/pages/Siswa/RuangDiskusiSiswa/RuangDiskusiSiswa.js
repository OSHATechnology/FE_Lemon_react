import React, { useState } from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import './RuangDiskusiSiswa.css'
import { Table } from 'react-bootstrap';
import NavBarSiswa from '../../../components/NavBarSiswa/NavBarSiswa';

const RuangDiskusiSiswa = () => {
  const [data, setData] = useState({})

  return (
    <div>
      <NavBarSiswa/>
      <Container className='mt-5'>
        <h5 className='fw-bold text-center'>RUANG DISKUSI</h5>
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
            {data.length > 0 
              ? data.map((item, key)=> {
                <tr>
                  <td>No</td>
                  <td>Ruang 1</td>
                  <td>Mapel 1</td>
                  <td>Lorem ipsum sit dolor amet</td>
                </tr>
              })
              : (
                <tr>
                  <td colspan='4'>Data tidak ditemukan</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default RuangDiskusiSiswa