import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import './DaftarSiswa.css'
import { Col, Row, Table } from 'react-bootstrap';
import SearchBar from '../../../components/SearchBar/Searchbar';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './DaftarSiswa.css'



class DaftarSiswa extends Component {

    

    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});

    state = {
        siswas: [],
        siswa: [],
        loading: true,
        loadingModal: true,
        show: false,
    }

    async componentDidMount() {
        const res = await axios.get('/api/auth/siswas');
        if (res.status === 200) {
            this.setState({
                siswas: res.data.data,
                loading: false,
            });
        }
    }

    featchData = async () => {
        const res = await axios.get('/api/auth/siswas');
        if (res.status === 200) {
            this.setState({
                siswas: res.data.data,
                loading: false,
            });
        }
    }

    featchDataDetail = async (id_siswa) => {
        this.handleShow()
        const res = await axios.get(`api/auth/edit-siswa/${id_siswa}`);
        if (res.status === 200) {
            this.setState({
                siswa: res.data.data,
                loadingModal: false,
            });
            console.log(this.state.siswa)
        }
    }

    deleteSiswa = async (e, idSiswa) => {
        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Deleting";

        const res = await axios.delete(`/api/auth/hapus-siswa/${idSiswa}`);
        
        if (res.status === 200) 
        {
            // thidClickedFunda.closest("siswas").remove();
             // console.log(res.message);
            swal({
                title: "Data Berhasil Dihapus!",
                text: res.massage,
                icon: "success",
                button: "Ok!",
              });
              this.featchData()
        }
    }

    render() {
        var siswas_HTML_TABLE = "";
        
        if (this.state.loading) {
            siswas_HTML_TABLE = <tr><td colSpan="10"> <h2>Loading....</h2></td></tr>
        } else {
            siswas_HTML_TABLE =
                this.state.siswas.map((siswas) => {
                    return (
                        <tr key={siswas.idSiswa}>
                            <td>{siswas.nama}</td>
                            <td>{siswas.nisn}</td>
                            <td>{siswas.email}</td>
                            <td>{siswas.tgl_lahir}</td>
                            <td>{siswas.jns_kelamin}</td>
                            <td>{siswas.agama}</td>
                            <td>{siswas.telepon}</td>
                            <td>
                                <Button type='button' onClick={() => this.featchDataDetail(siswas.idSiswa)} className="btn btn-primary btn-sm buttonrd1">Detail</Button>
                                <Link to={`edit-siswa/${siswas.idSiswa}`} className="btn btn-success btn-sm buttonrd1">Edit</Link>
                                <button type='button' onClick={(e) => this.deleteSiswa(e, siswas.idSiswa)} className='btn btn-danger btn-sm'>Hapus</button>
                            </td>
                        </tr>
                    );
                });
        }

        return (
            <div>
                <NavBarGuru />
                
                <Container className='mt-5'>
                    <h5 className='fw-bold'>DATA SISWA</h5>
                    <div className='d-flex justify-content-between align-items-end mb-3'>
                        <Card className='cardu1 bg-success text-white text-center'>
                            <Card.Header>Jumlah Siswa</Card.Header>
                            <Card.Body>100</Card.Body>
                        </Card>
                        <SearchBar/>
                    </div>
                    <Table striped bordered hover size='sm' className='text-center'>
                        <thead>
                            <tr>
                            <th>Nama</th>
                            <th>Nisn</th>
                            <th>Email</th>
                            <th>Tanggal Lahir</th>
                            <th>Jenis Kelamin</th>
                            <th>Agama</th>
                            <th>Nomor Telepon</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.siswas.length > 0 ?siswas_HTML_TABLE : <tr><td colSpan={8}>Data Tidak Ditemukan</td></tr>}
                        </tbody>
                    </Table>
                </Container>

                <Modal size='lg' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detail Siswa</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.updatesiswa}>
                        
                            <Form.Group className="mb-3">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control type="text" name='nama'  value={this.state.siswa.nama} className="form" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>NISN</Form.Label>
                                <Form.Control type="number" name='nisn'  value={this.state.siswa.nisn} className="form" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control type="text" name='alamat'  value={this.state.siswa.alamat} className="form" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name='email'  value={this.state.siswa.email} className="form" disabled/>
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>Nama Ayah</Form.Label>
                                <Form.Control type="text" name='nama_ayah'  value={this.state.siswa.nama_ayah} className="form" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Nama Ibu</Form.Label>
                                <Form.Control type="text" name='nama_ibu'  value={this.state.siswa.nama_ibu} className="form" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Tempat Lahir</Form.Label>
                                <Form.Control type="text" name='tempat'  value={this.state.siswa.tempat} className="form" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control type="date" name='tgl_lahir'  value={this.state.siswa.tgl_lahir} className="form" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Jenis Kelamin</Form.Label>
                                <Form.Select type="select" name='jns_kelamin'  value={this.state.siswa.jns_kelamin} className="form" disabled>
                                    <option disabled selected>- Silahkan Pilih -</option>
                                    <option>Laki-Laki</option>
                                    <option>perempuan</option>
                                    <option>Lainnya</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Agama</Form.Label>
                                <Form.Select type="select" name='agama'  value={this.state.siswa.agama} className="form"disabled>
                                    <option disabled selected>- Silahkan Pilih -</option>
                                    <option>Islam</option>
                                    <option>Protestan</option>
                                    <option>Katolik</option>
                                    <option>Hindu</option>
                                    <option>Buddha</option>
                                    <option>Khonghucu</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Telepon</Form.Label>
                                <Form.Control type="text" name='telepon'  value={this.state.siswa.telepon} className="form" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Kode Pos</Form.Label>
                                <Form.Control type="number" name='kd_pos'  value={this.state.siswa.kd_pos} className="form"disabled />
                            </Form.Group>
                            
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>   
        )
    }
}

export default DaftarSiswa;