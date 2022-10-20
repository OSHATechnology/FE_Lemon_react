import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'

class EditSiswa extends Component
{
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
        const id_siswa = this.props.match.params.id;
        //console.log(id_siswa);
        const res = await axios.get(`api/auth/edit-siswa/${id_siswa}`);
        if(res.data.status === 200) {
            this.setState({
                nama: res.data.siswas.nama,
                nisn: res.data.siswas.nisn,
                alamat: res.data.siswas.alamat,
                email: res.data.siswa.email,
                password: res.data.siswa.password,
                nama_ayah: res.data.siswa.nama_ayah,
                nama_ibu: res.data.siswa.nama_ibu,
                tempat: res.data.siswa.tempat,
                tgl_lahir: res.data.siswa.tgl_lahir,
                jns_kelamin: res.data.siswa.jns_kelamin,
                agama: res.data.siswa.agama,
                telepon: res.data.siswa.telepon,
                kd_pos: res.data.siswa.kd_pos,
            });
        }
    }



    updatesiswa = async (e) => {
        e.preventDefault();

        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "updating";
        const id_siswa = this.props.match.params.id;    
        const res = await axios.put(`api/auth/update-siswa/${id_siswa}`, this.state);

        if(res.data.status === 200)
        {
            console.log(res.data.massage);
            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = "updateing";
        }
    }

    render() {
        return (
            <div><NavBarGuru/>
            <h5><div className='labeldasb fw-bold'>Pengaturan Akun</div></h5>
    <Container className='card1'>
    <Card>
      <Card.Header>Edit Data Siswa
      </Card.Header>
      <Card.Body>
        <form onSubmit={this.updatesiswa}>

            <div className='form-group mb-3' controlId="formBasicEmail">
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

export default EditSiswa;