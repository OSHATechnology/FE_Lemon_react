import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import './DaftarSiswa.css'
import { Table } from 'react-bootstrap';
import SearchBar from '../../../components/SearchBar/Searchbar';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

class DaftarSiswa extends Component {

    state = {
        siswas: [],
        loading: true,
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

    render() {

        var siswas_HTML_TABLE = "";
        if (this.state.loading) {
            siswas_HTML_TABLE = <tr><td colSpan="10"> <h2>Loading....</h2></td></tr>
        }
        else {
            siswas_HTML_TABLE =
                this.state.siswas.map((siswas) => {
                    return (
                        <tr key={siswas.idSiswa}>
                            <td>{siswas.idSiswa}</td>
                            <td>{siswas.nama}</td>
                            <td>{siswas.nisn}</td>
                            <td>{siswas.email}</td>
                            <td>{siswas.tgl_lahir}</td>
                            <td>{siswas.jns_kelamin}</td>
                            <td>{siswas.agama}</td>
                            <td>{siswas.telepon}</td>
                            <td>
                                <Link to={`edit-siswa/${siswas.idSiswa}`} className="btn btn-success btn-sm">Edit</Link>
                            </td>
                            
                        </tr>
                    );
                });
        }

        return (
            <div><NavBarGuru />
            <SearchBar/>
            <h5><div className='labeldas fw-bold'>DATA SISWA</div></h5>
            <Container>
        <Table striped bordered hover size='sm' className='text-center'>
      <thead>
        <tr>
        <th>No</th>
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
        {siswas_HTML_TABLE}
      </tbody>
      </Table>
      </Container>
    </div>   

        )
    }
}

export default DaftarSiswa;