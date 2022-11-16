import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Container, Form, Card, Nav } from 'react-bootstrap';
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import withRouter from '../../../withRouter';
import swal from 'sweetalert';
import axios from 'axios'

class EditSiswa extends Component {
    state = {
        nama: '',
        nisn: '',
        alamat: '',
        email: '',
        password: '',
        nama_ayah: '', //dummy
        nama_ibu: '', //dummy
        tempat: '', //dummy
        tgl_lahir: '', //dummy
        jns_kelamin: '', //dummy
        agama: '', //dummy
        telepon: '', //dummy
        kd_pos: '', //dummy
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    async componentDidMount() {
        const idSiswa = this.props.params.id;
        const res = await axios.get(`api/auth/edit-siswa/${idSiswa}`);
        if (res.status === 200) {
            const data = res.data.data;
            this.setState({
                nama: data.nama,
                nisn: data.nisn,
                alamat: data.alamat,
                email: data.email,
                nama_ayah: data.nama_ayah,
                nama_ibu: data.nama_ibu,
                tempat: data.tempat,
                tgl_lahir: data.tgl_lahir,
                jns_kelamin: data.jns_kelamin,
                agama: data.agama,
                telepon: data.telepon,
                kd_pos: data.kd_pos,
            });
        }
    }



    updatesiswa = async (e) => {
        e.preventDefault();

        document.getElementById('updatebtn').setAttribute("disabled","disabled");
        document.getElementById('updatebtn').innerText = "updating";
        const idSiswa = this.props.params.id;
        const res = await axios.put(`api/auth/update-siswa/${idSiswa}`, this.state);

        if (res.status === 200) 
        {
            swal({
                title: "Data Telah Ter-update!",
                text: res.message,
                icon: "success",
                button: "Ok!",
              }).then((result) => {
                document.getElementById('updatebtn').innerText = "Update Data";
              })
               
            document.getElementById('updatebtn').removeAttribute("disabled");
            document.getElementById('updatebtn').innerText = "updating";
        }
    }

    render() {
        return (
            <div><NavBarGuru />
                <h5><div className='labeldasb fw-bold'>Pengaturan Akun</div></h5>
                <Container className='card1'>
                    <Card>
                        <Card.Header>Ubah Data Siswa
                            <Link to={'/daftarsiswa'} className="btn btn-secondary btn-sm float-end">Kembali</Link>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.updatesiswa}>
                            
                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control type="text" name='nama' onChange={this.handleInput} value={this.state.nama} className="form" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>NISN</Form.Label>
                                    <Form.Control type="number" name='nisn' onChange={this.handleInput} value={this.state.nisn} className="form" disabled/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control type="text" name='alamat' onChange={this.handleInput} value={this.state.alamat} className="form" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name='email' onChange={this.handleInput} value={this.state.email} className="form" />
                                </Form.Group>


                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Ayah</Form.Label>
                                    <Form.Control type="text" name='nama_ayah' onChange={this.handleInput} value={this.state.nama_ayah} className="form" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Ibu</Form.Label>
                                    <Form.Control type="text" name='nama_ibu' onChange={this.handleInput} value={this.state.nama_ibu} className="form" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tempat Lahir</Form.Label>
                                    <Form.Control type="text" name='tempat' onChange={this.handleInput} value={this.state.tempat} className="form" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control type="date" name='tgl_lahir' onChange={this.handleInput} value={this.state.tgl_lahir} className="form" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Form.Select type="select" name='jns_kelamin' onChange={this.handleInput} value={this.state.jns_kelamin} className="form" >
                                        <option disabled selected>- Silahkan Pilih -</option>
                                        <option>Laki-Laki</option>
                                        <option>perempuan</option>
                                        <option>Lainnya</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Agama</Form.Label>
                                    <Form.Select type="select" name='agama' onChange={this.handleInput} value={this.state.agama} className="form">
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
                                    <Form.Control type="text" name='telepon' onChange={this.handleInput} value={this.state.telepon} className="form" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Kode Pos</Form.Label>
                                    <Form.Control type="number" name='kd_pos' onChange={this.handleInput} value={this.state.kd_pos} className="form" />
                                </Form.Group>

                                <div className='form-group mb-3'>
                                    <Button type="submit" id="updatebtn" variant='success'>Update Data</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container></div>

        );
    }
}

export default withRouter(EditSiswa);