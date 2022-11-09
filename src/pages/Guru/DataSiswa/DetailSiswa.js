import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import withRouter from '../../../withRouter';

class DetailSiswa extends Component {
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
        const id_siswa = this.props.params.id;
        const res = await axios.get(`api/auth/edit-siswa/${id_siswa}`);
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

        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "updating";
        const id_siswa = this.props.params.id;
        const res = await axios.put(`api/auth/update-siswa/${id_siswa}`, this.state);

        if (res.data.status === 200) {
            console.log(res.data.massage);
            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = "updating";
        }
    }

    render() {
        return (
            <div><NavBarGuru />
                <h5><div className='labeldasb fw-bold'>Pengaturan Akun</div></h5>
                <Container className='card1'>
                    <Card>
                        <Card.Header>Detail Data Siswa
                            <Link to={'/daftarsiswa'} className="btn btn-primary btn-sm float-end">Kembali</Link>
                        </Card.Header>
                        <Card.Body>
                        <Form onSubmit={this.updatesiswa}>
                        
                        <Form.Group className="mb-3 sorting sorting_asc">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" name='nama' onChange={this.handleInput} value={this.state.nama} className="form" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                        <Form.Label>NISN</Form.Label>
                        <Form.Control type="number" name='nisn' onChange={this.handleInput} value={this.state.nisn} className="form" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" name='alamat' onChange={this.handleInput} value={this.state.alamat} className="form" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' onChange={this.handleInput} value={this.state.email} className="form" disabled/>
                        </Form.Group>


                        <Form.Group className="mb-3">
                        <Form.Label>Nama Ayah</Form.Label>
                        <Form.Control type="text" name='nama_ayah' onChange={this.handleInput} value={this.state.nama_ayah} className="form" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Nama Ibu</Form.Label>
                        <Form.Control type="text" name='nama_ibu' onChange={this.handleInput} value={this.state.nama_ibu} className="form" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Tempat Lahir</Form.Label>
                        <Form.Control type="text" name='tempat' onChange={this.handleInput} value={this.state.tempat} className="form" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Tanggal Lahir</Form.Label>
                        <Form.Control type="date" name='tgl_lahir' onChange={this.handleInput} value={this.state.tgl_lahir} className="form" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Jenis Kelamin</Form.Label>
                        <Form.Select type="select" name='jns_kelamin' onChange={this.handleInput} value={this.state.jns_kelamin} className="form" disabled>
                        <option disabled selected>- Silahkan Pilih -</option>
                        <option>Laki-Laki</option>
                        <option>perempuan</option>
                        <option>Lainnya</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Agama</Form.Label>
                        <Form.Select type="select" name='agama' onChange={this.handleInput} value={this.state.agama} className="form"disabled>
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
                        <Form.Control type="number" name='telepon' onChange={this.handleInput} value={this.state.telepon} className="form" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Kode Pos</Form.Label>
                        <Form.Control type="number" name='kd_pos' onChange={this.handleInput} value={this.state.kd_pos} className="form"disabled />
                        </Form.Group>
                            
                            </Form>
                        </Card.Body>
                    </Card>
                </Container></div>

        );
    }
}

export default withRouter(DetailSiswa);