import React, { useState } from 'react'
import { Table, Container, Button, Form, Modal, FormCheck } from 'react-bootstrap'
import { FaPen, FaSearch, FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'

const ModulPembelajaran = () => {
  const [data, setData] = useState({})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  return (
    <div>
        <NavBarGuru />
        <Container className='mt-5'>
            <h5 className='my-3'>Modul 1 - Mapel 1</h5>
            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum purus nec ipsum aliquam, eget luctus magna dapibus. Ut orci felis, tempus rhoncus metus a, pharetra euismod nulla. Phasellus nec quam eget nulla feugiat dictum eget ac diam. Pellentesque eu pharetra mauris. Maecenas sit amet bibendum felis. Vestibulum non tellus venenatis, venenatis nisl vitae, maximus magna. Ut tempus ultricies erat in laoreet. </p>
            <Table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Tugas dan Materi</th>
                        <th colSpan={3}>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        data.length < 1
                            ? 
                            <tr>
                                <td>1</td>
                                <td>Materi Modul 1</td>
                                <td><Button variant='success'><FaSearch /></Button></td>
                                <td><Button variant='primary'><FaPen /></Button></td>
                                <td><Button variant='danger'><FaTrashAlt /></Button></td>
                            </tr>
                            :
                            <tr>
                                <td colSpan={3} className="text-center">Data tidak ditemukan</td>
                            </tr>
                        }
                </tbody>
            </Table>
            <div className='d-flex gap-3'>
                <Button variant='success' className='border-radius' onClick={() => navigate('buat-materi')}>Tambah Tugas dan Materi</Button>
                <Button variant='success' className='border-radius' onClick={handleShow}>Bagikan ke</Button>
                <Button variant='success' className='border-radius' onClick={() => navigate('kelas')}>Lihat Proses Pembelajaran</Button>
            </div>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Bagikan Ke</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Check 
                    type='checkbox'
                    id='checkall'
                    label='Pilih Semua'
                    className='my-3'
                />
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`Kelas X - A`}
                            label={`Kelas X - A`}
                            className='my-3'
                        />
                        <Form.Check 
                            type={type}
                            id={`Kelas XI - B`}
                            label={`Kelas XI - B`}
                            className='my-3'
                        />
                        <Form.Check 
                            type={type}
                            id={`Kelas XII - C`}
                            label={`Kelas XII - C`}
                            className='my-3'
                        />
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Tutup
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Bagikan
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ModulPembelajaran