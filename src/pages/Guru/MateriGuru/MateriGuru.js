import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru';

import './MateriGuru.css';


function MateriGuru() {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  // for onchange event
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');

  // for submit event
  const [viewPdf, setViewPdf]=useState(null);

  // onchange event
  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setPdfFileError('');
            }
      }
      else{
        setPdfFile(null);
        setPdfFileError('Please select valid pdf file');
      }
    }
    else{
      console.log('select your file');
    }
  }

  // form submit
  const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
    }
    else{
      setViewPdf(null);
    }
  }

 const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



  return (
    <div><NavBarGuru/>
    <h5><div className='MATERIDANTUGAS fw-bold'>MATERI DAN TUGAS SISWA</div></h5>
    <Container>
    <Card>
      <Card.Body>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>


          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className='mt-3 mb-3'>Upload Materi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Upload Tugas</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">

            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mata Pelajaran</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Judul Materi</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Kelas</Form.Label>
          <Form.Select id="agama">
            <option>- Silahkan Pilih -</option>
            <option>X</option>
            <option>XI</option>
            <option>XII</option>
          </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Form>

      <h6><div className='fw-bold'>Upload Materi</div></h6>
    <div className='container'>
    <br></br>
    </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">

            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mata Pelajaran</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Judul tugas</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Kelas</Form.Label>
          <Form.Select id="agama">
            <option>- Silahkan Pilih -</option>
            <option>X</option>
            <option>XI</option>
            <option>XII</option>
          </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Deskripsi tugas</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
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
  );
}

export default MateriGuru;