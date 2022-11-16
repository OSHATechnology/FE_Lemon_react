import React,{useState} from 'react'
import { Button, Container, Col, Row, Form, Table } from 'react-bootstrap';
import { FaSearch, FaPen, FaTrashAlt } from 'react-icons/fa'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import './Erapor.css'

const Erapor = () => {
  const [data, setData] = useState({})

  return (
    <div>
      <NavBarGuru/>
      <Container className='mt-5'>
        <h5 className='fw-bold'>E-RAPOT</h5>
        <Row className='justify-content-between align-items-end'>
          <Col sm={6}>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Kelas</Form.Label>
                <Form.Select defaultValue="Silahkan Pilih Kelas">
                  <option disabled selected>Silahkan Pilih Kelas</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tingkat</Form.Label>
                <Form.Select defaultValue="Silahkan Pilih Tingkat">
                  <option disabled selected>Silahkan Pilih Tingkat</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Col>
          <Col sm={6}>
            <Button variant='success' className='float-end'>Tampilkan Data</Button>
          </Col>
        </Row>

        <Table striped bordered hover size='sm' className='text-center mt-3'>
          <thead>
            <tr>
              <th>No</th>
              <th>NISN</th>
              <th>Nama Siswa/i</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 
              ? data.map((item, key) => {
                return (
                  <tr>
                    <td>No</td>
                    <td>NISN</td>
                    <td>Nama Siswa/i</td>
                    <td><Button variant='success'><FaSearch /></Button></td>
                    <td><Button variant='primary'><FaPen /></Button></td>
                    <td><Button variant='danger'><FaTrashAlt /></Button></td>
                  </tr>
                )
              })
              : (
                <tr>
                  <td colSpan={4}>Data tidak ditemukan</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Erapor