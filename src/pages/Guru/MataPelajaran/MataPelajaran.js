import React,{useState} from 'react'
import { Button, Container, Col, Nav, Row, Tab, Card, Form, Table } from 'react-bootstrap';
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru';
import './MataPelajaran.css'

function MataPelajaran() {

  return (
    <div>
      <NavBarGuru/>
      <Container className='mt-5'>
        <h5><div className='fw-bold'>MATA PELAJARAN</div></h5>
        <Card>
          <Card.Body>
            <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column bakronn">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className='mt-3 mb-3  warnaa2'>Tambah Mata Pelajaran</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className='mt-3 mb-3 warnaa2'>Data Mata Pelajaran</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Nama Mata Pelajaran</Form.Label>
                          <Form.Control type="text"/>
                          <Button className='mt-2 btn-sm'variant="success">+ Tambah Mapel</Button>
                          <Form.Text className="text-muted">
                          </Form.Text>
                        </Form.Group>
                      </Form>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Table striped bordered hover size='sm' className='text-center'>
                        <thead>
                          <tr>
                            <th>Mata Pelajaran</th>
                            <th>Deskripsi Mapel</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>

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

export default MataPelajaran;