import React, { useState } from  'react'
import './JurnalGuruSiswa.css'
import { Container, Table, Form, Button } from 'react-bootstrap'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'

const JurnalGuruSiswa = () => {
    const [data, setData] = useState({})
  
    return (
    <div>
        <NavBarGuru />
        <Container>
            <h3 className='mt-3'>Jurnal Guru - Modul 1</h3>
            <div className='d-flex justify-content-between'>
                <div className='d-flex my-3'>
                    <div className='me-3 d-flex justify-content-center align-items-center'>
                        <label className='me-1'>Nama</label>
                        <Form.Select>
                            <option>Klik untuk pilih Siswa</option>
                            <option value="1">Name 1</option>
                            <option value="2">Name 2</option>
                            <option value="3">Name 3</option>
                        </Form.Select>  
                    </div>
                    <div className='me-3 d-flex justify-content-center align-items-center'>
                        <label className='me-1'>Kelas</label>
                        <Form.Select>
                            <option>Klik untuk pilih kelas</option>
                            <option value="10-a">X - A</option>
                            <option value="11-b">XI - B</option>
                            <option value="12-c">XII- C</option>
                        </Form.Select>
                    </div>
                    <div className='me-3 d-flex justify-content-center align-items-center'>
                        <label className='me-1'>Semester</label>
                        <Form.Select>
                            <option>Klik untuk pilih semester</option>
                            <option value="ganjil">Ganjil</option>
                            <option value="genap">Genap</option>
                        </Form.Select>
                    </div>
                </div>

                {/* <div className='d-flex justify-content-end my-3'>
                    <Button variant='success' className='border-radius'>Tampilkan Data</Button>
                </div> */}
            </div>
            <Table variant='secondary' className='table-bordered'>
                <thead>
                    <tr>
                        <th className='text-center'>No.</th>
                        <th>Tugas dan Materi</th>
                        <th>Proses Pembelajaran</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? 
                    data.map(function(item, i){
                        return
                        <tr>
                            <td className='text-center'>1</td>
                            <td>Materi 1</td>
                            <td>Selesai</td>
                        </tr>
                    })
                    : <tr><td colSpan={4} className='text-center'>Data tidak ditemukan</td></tr>}
                </tbody>
            </Table>
            <div className='d-flex justify-content-end my-3'>
                <Button variant='success' className='border-radius'>Buat Laporan</Button>
            </div>
        </Container>
    </div>
  )
}

export default JurnalGuruSiswa