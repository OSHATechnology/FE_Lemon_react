import React, { useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import { FaSearch, FaPen, FaTrashAlt } from 'react-icons/fa'
import './RuangDiskusiGuru.css'

const RuangDiskusiGuru = () => {
  const [data, setData] = useState({})

  return (
    <div>
      <NavBarGuru/>

      <Container className='mt-5'>
        <div className='d-flex justify-content-between'>
          <h5 className='fw-bold'>RUANG DISKUSI</h5>
          <Button href='/guru/ruang-diskusi/buat-ruang-diskusi' variant='success' size='sm'>+ Buat Ruang Baru</Button>
        </div>
        <Table striped bordered hover size='lg' className='text-center mt-4'>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Mata Pelajaran</th>
              <th>Keterangan</th>
              <th colspan='3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length>0
              ? data.map((item, key) => {
                return (
                  <tr>
                    <td>1</td>
                    <td>ruang 1</td>
                    <td>mapel 1</td>
                    <td>Lorem ipsum sit dolor amet</td>
                    <td>
                      <Button variant='success'><FaSearch /></Button>
                    </td>
                    <td>
                      <Button variant='primary'><FaPen /></Button>
                    </td>
                    <td>
                      <Button variant='danger'><FaTrashAlt /></Button>
                    </td>
                  </tr>
                )
              })
              : (
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

export default RuangDiskusiGuru