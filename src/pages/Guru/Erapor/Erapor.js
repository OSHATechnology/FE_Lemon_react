import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'

const Erapor = () => {
  return (
    <div><NavBarGuru/>
    <h5><div className='MATERIDANTUGAS fw-bold'>E-rapor Siswa</div></h5>
    
    <Container>
    <Card>
      <Card.Body>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>


          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className='mt-3 mb-3'>Kelas X</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='mt-3 mb-3'>Kelas XI</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='mt-3 mb-3'>Kelas XII</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">

            <Form>
            <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Tahun Ajaran</Form.Label>
          <Form.Select id="ajaran">
            <option>- Silahkan Pilih -</option>
            <option>2021/2022</option>
            <option>2020/2021</option>
          </Form.Select>
          </Form.Group>
            <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Mata Pelajaran</Form.Label>
          <Form.Select id="agama">
            <option>- Silahkan Pilih -</option>
            <option>Bahasa Indonesia</option>
            <option>Bahasa Inggris</option>
            <option>Bahasa Sunda</option>
            <option>Matematika</option>
            <option>Kimia</option>
            <option>Biologi</option>
            <option>Fisika</option>
            <option>Pendidikan Agama Islam</option>
          </Form.Select>
          </Form.Group>
          <button type="submit" className='btn btn-success btn-sm'>
          Tampilkan
        </button>
      </Form>


            </Tab.Pane>
            <Tab.Pane eventKey="second">

            <Form>
            <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Tahun Ajaran</Form.Label>
          <Form.Select id="ajaran">
            <option>- Silahkan Pilih -</option>
            <option>2021/2022</option>
            <option>2020/2021</option>
          </Form.Select>
          </Form.Group>
            <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Mata Pelajaran</Form.Label>
          <Form.Select id="agama">
            <option>- Silahkan Pilih -</option>
            <option>Bahasa Indonesia</option>
            <option>Bahasa Inggris</option>
            <option>Bahasa Sunda</option>
            <option>Matematika</option>
            <option>Kimia</option>
            <option>Biologi</option>
            <option>Fisika</option>
            <option>Pendidikan Agama Islam</option>
          </Form.Select>
          </Form.Group>
          <button type="submit" className='btn btn-success btn-sm'>
          Tampilkan
        </button>
      </Form>



            </Tab.Pane>
            <Tab.Pane eventKey="third">

            <Form>
            <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Tahun Ajaran</Form.Label>
          <Form.Select id="ajaran">
            <option>- Silahkan Pilih -</option>
            <option>2021/2022</option>
            <option>2020/2021</option>
          </Form.Select>
          </Form.Group>
            <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Mata Pelajaran</Form.Label>
          <Form.Select id="agama">
            <option>- Silahkan Pilih -</option>
            <option>Bahasa Indonesia</option>
            <option>Bahasa Inggris</option>
            <option>Bahasa Sunda</option>
            <option>Matematika</option>
            <option>Kimia</option>
            <option>Biologi</option>
            <option>Fisika</option>
            <option>Pendidikan Agama Islam</option>
          </Form.Select>
          </Form.Group>
          <button type="submit" className='btn btn-success btn-sm'>
          Tampilkan
        </button>
      </Form>

            </Tab.Pane>



          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Card.Body>
      </Card>
    </Container>

    </div>
  )
}

export default Erapor