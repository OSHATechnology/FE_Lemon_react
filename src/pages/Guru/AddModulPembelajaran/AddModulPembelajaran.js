import React from 'react'
import { Form, Container, Col, Row, Button } from 'react-bootstrap'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import NavigationBar from '../../../components/NavigationBar/NavigationBar'

const AddModulPembelajaran = () => {
  return (
    <div>
      <NavBarGuru />
      <Container>
        <h5 className='mt-4 mb-5'>Buat Modul Pembelajaran</h5>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nama Modul</Form.Label>
                <Form.Control type="text" placeholder="Nama Materi" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mata Pelajaran</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Pilih Mata Pelajaran</option>
                  <option value="1">Mapel 1</option>
                  <option value="2">Mapel 2</option>
                  <option value="3">Mapel 3</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Kelas</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Pilih Kelas</option>
                  <option value="1">X</option>
                  <option value="2">XI</option>
                  <option value="3">XII</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className='w-100 d-flex justify-content-center mt-5'>
            <Button variant='success' className='border-radius'>Buat Modul Pembelajaran</Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default AddModulPembelajaran