import React,{useState} from 'react'
import { Button, Container, Col, Nav, Row , Tab, Card, Form, Table } from 'react-bootstrap';
import { FaSearch, FaPen, FaTrashAlt} from 'react-icons/fa'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru';
import './Kelas.css'

function Kelas() {
  const [data, setData] = useState({})

  return (
    <div>
      <NavBarGuru/>
      <Container className='mt-5'>
        <h5 className='fw-bold'>KELAS</h5>

        <Card>
          <Card.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column bakronnn">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className='mt-3 mb-3 warnaa3'>Tambah Kelas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className='mt-3 mb-3 warnaa3'>Data Kelas</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Kelas</Form.Label>
                        <Form.Control type="email"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tingkat</Form.Label>
                        <Form.Control type="email"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                      </Form.Group>
                      <Button variant="success" className='mt-2 btn-sm'>+ Tambah Kelas</Button>
                    </Form>
                    </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Table striped bordered hover size='sm' className='text-center'>
                          <thead>
                            <tr>
                              <th>Nama Kelas</th>
                              <th>Jumlah Siswa</th>
                              <th colSpan={3}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.length > 0 
                              ? data.map((item, key) => {
                                return (
                                  <tr>
                                    <td>X - A</td>
                                    <td>11</td>
                                    <td><Button variant='success'><FaSearch /></Button></td>
                                    <td><Button variant='edit'><FaPen /></Button></td>
                                    <td><Button variant='danger'><FaTrashAlt /></Button></td>
                                  </tr>
                                )
                              })
                              : (
                                <tr>
                                  <td colSpan={3}>Data tidak ditemukan</td>
                                </tr>
                              )
                            }
                          </tbody>
                      </Table>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Kelas;