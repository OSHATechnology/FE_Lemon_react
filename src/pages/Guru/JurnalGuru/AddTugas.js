import { React, useState } from 'react'
import { Col, Container, Form, Row, InputGroup, Button } from 'react-bootstrap'
import { FaClock } from 'react-icons/fa'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'

const AddTugas = () => {
  const [showDeadline, setShowDeadline] = useState(false);

  const handleChangeTipe = (e) => {
    e.target.value === 'materi' ?
    setShowDeadline(false) : 
    e.target.value === 'tugas' ?
    setShowDeadline(true) :
    setShowDeadline(false)
  }

  return (
    <div>
        <NavBarGuru />
        <Container className='mt-5'>
            <h5 className=' mb-5'>Buat Tugas/Materi - Modul 1</h5>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nama Materi</Form.Label>
                            <Form.Control placeholder='Materi'/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Mata Pelajaran</Form.Label>
                            <Form.Control placeholder='Mata Pelajaran' disabled/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control placeholder='Kelas' disabled/>
                        </Form.Group>
                        
                        <Form.Group className='mb-3'>
                            <Form.Label>Tipe</Form.Label>
                            <Form.Select onChange={(e) => handleChangeTipe(e)}>
                                <option value='materi'>Materi</option>
                                <option value='tugas'>Tugas</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Deskripsi materi"
                                style={{ height: '100px' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Lampiran</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        {showDeadline === true ? 
                            (
                                <Form.Group>
                                    <Form.Label>Tenggat Waktu</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text><FaClock /></InputGroup.Text>
                                        <Form.Control type='number' placeholder="Harian" />
                                        <InputGroup.Text>Hari</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            ) :
                            ( '' )
                        }
                    </Col>
                    <div className='d-flex w-100 justify-content-center mt-3'>
                        <Button variant='success'>Tambah Tugas/Materi</Button>
                    </div>
                </Row>
            </Form>
        </Container>
    </div>
  )
}

export default AddTugas