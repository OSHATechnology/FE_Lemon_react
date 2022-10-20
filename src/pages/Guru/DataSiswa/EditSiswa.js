import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import withRouter from '../../../withRouter';

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
        const id_siswa = this.props.params.id;
        const res = await axios.get(`api/auth/edit-siswa/${id_siswa}`);
        if (res.status === 200) {
            const data = res.data.data;
            this.setState({
                nama: data.nama,
                nisn: data.nisn,
                alamat: data.alamat,
                email: data.email,
                password: data.password,
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
        const id_siswa = this.props.match.params.id;
        const res = await axios.put(`api/auth/update-siswa/${id_siswa}`, this.state);

        if (res.data.status === 200) {
            console.log(res.data.massage);
            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = "updateing";
        }
    }

    render() {
        return (
            <div><NavBarGuru />
                <h5><div className='labeldasb fw-bold'>Pengaturan Akun</div></h5>
                <Container className='card1'>
                    <Card>
                        <Card.Header>Edit Data Siswa
                        </Card.Header>
                        <Card.Body>
                            <form onSubmit={this.updatesiswa}>

                                <div className='form-group mb-3'>
                                    <label>Nama</label>
                                    <input type="text" name='nama' onChange={this.handleInput} value={this.state.nama} className="form" />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>NISN</label>
                                    <input type="text" name='nama' onChange={this.handleInput} value={this.state.nisn} className="form" />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Alamat</label>
                                    <input type="text" name='nama' onChange={this.handleInput} value={this.state.alamat} className="form" />
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Container></div>

        );
    }
}

export default withRouter(EditSiswa);