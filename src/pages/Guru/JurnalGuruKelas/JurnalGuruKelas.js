import React, { useState } from  'react'
import './JurnalGuruKelas.css'
import { Container, Table, Form, Button } from 'react-bootstrap'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'

const JurnalGuruKelas = () => {
    const [data, setData] = useState({})

    return (
    <div>
        <NavBarGuru />
        <Container>
            <h3 className='mt-3'>Jurnal Guru - Modul 1</h3>
            <div className='d-flex justify-content-between'>
                <div className='d-flex w-60 my-3'>
                    <p className='my-auto me-3'>Pilih Kelas</p>
                    <div className='me-3'>
                        <Form.Select>
                            <option>Klik untuk pilih kelas</option>
                            <option value="10-a">X - A</option>
                            <option value="11-b">XI - B</option>
                            <option value="12-c">XII- C</option>
                        </Form.Select>  
                    </div>
                </div>

                <div className='d-flex justify-content-end w-40 my-3'>
                    <Button variant='success' className='border-radius'>Tampilkan Data</Button>
                </div>
            </div>
            <Table variant='secondary' className='table-bordered'>
                <thead>
                    <tr>
                        <th className='text-center'>No.</th>
                        <th>NISN</th>
                        <th>Nama Siswa</th>
                        <th>Proses Pembelajaran</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? 
                    data.map(function(item, i){
                        return (
                        <tr>
                            <td className='text-center'>1</td>
                            <td>11111111</td>
                            <td>Name</td>
                            <td>90%</td>
                        </tr>
                        )
                    })
                    : <tr><td colSpan={4} className='text-center'>Data tidak ditemukan</td></tr>}
                </tbody>
            </Table>
        </Container>
    </div>
  )
}

export default JurnalGuruKelas