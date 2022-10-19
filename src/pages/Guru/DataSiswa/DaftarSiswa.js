import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'

 class DaftarSiswa extends Component 
 {

    state = {
        siswas: [],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('/api/auth/siswas');
      // console.log(res);
       if(res.data.status === 200)
       {
        this.setState({
            siswas: res.data.siswas,
            loading: false,
        });
       }
    }

  render() {

    var siswas_HTML_TABLE = "";
    if(this.state.loading)
    {
        siswas_HTML_TABLE = <tr><td colSpan="7"> <h2>Loading....</h2></td></tr>
    }
    else
    {
        siswas_HTML_TABLE =
        this.state.siswas.map( (siswas) => {
        return (
            <tr key={siswas.idSiswa}>
                <td>{siswas.nama}</td>
                <td>{siswas.nisn}</td>
                <td>{siswas.alamat}</td>
                <td>{siswas.email}</td>
                <td>{siswas.nama_ayah}</td>
                <td>{siswas.nama_ibu}</td>
                <td>{siswas.tempat}</td>
                <td>{siswas.tgl_lahir}</td>
                <td>{siswas.jns_kelamin}</td>
                <td>{siswas.agama}</td>
                <td>{siswas.telepon}</td>
                <td>{siswas.kd_pos}</td>
                <td>
                    <Link to={'edit-siswas/${siswa_idSiswas'} className="btn btn-success btn-sm">Edit</Link>
                </td>
                <td>
                    <button type="button" className='btn btn-danger btn sm'>Delete</button>
                </td>
            </tr>
        );
    });
}

    return (
        <div><NavBarGuru/>
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="card">
        <div className="card-header">
           <h4>Daftar Siswa
            <Link to={'add-siswas'} className="btn btn-primary btn-sm float-end">Tambah Siswa</Link>
        </h4>
        
        <div className="card-body">
            <table className="table table-boardered table-striped">
                <thead>
                    <tr>
                        <th>id Siswa</th>
                        <th>Nama</th>
                        <th>Nisn</th>
                        <th>Alamat</th>
                        <th>Email</th>
                        <th>Nama Ayah</th>
                        <th>Nama Ibu</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Jenis Kelamin</th>
                        <th>Agama</th>
                        <th>Nomor Telepon</th>
                        <th>Kode Pos</th>
                    </tr>
                </thead>
                <tbody>
                    {siswas_HTML_TABLE}
                </tbody>
            </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    )
    }
 }

export default DaftarSiswa;