import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import { BiRefresh } from 'react-icons/bi'

const AddKelasVirtual = () => {
  return (
    <div>
        <NavBarGuru />
        <Container>
            <h5 className='mt-3 mb-5'>Buat Kelas Virtual Baru</h5>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nama Room</Form.Label>
                            <Form.Control placeholder="Room" />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Mata Pelajaran</Form.Label>
                            <Form.Control placeholder="Mata Pelajaran" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nama Kelas</Form.Label>
                            <Form.Select>
                                <option>Pilh Kelas</option>
                                <option>X - A</option>
                                <option>XI - B</option>
                                <option>XII - C</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Kode Kelas Virtual</Form.Label>
                            <div className='d-flex gap-1'>
                                <Form.Control placeholder="Kode Kelas Virtual" value='LkV451Jh' disabled />
                                <Button variant='secondary'><BiRefresh /></Button>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <div className='d-flex w-100 justify-content-center mt-3'>
                <Button variant='success'>Buat Kelas Virtual</Button>
            </div>
        </Container>
    </div>
  )
}

export default AddKelasVirtual