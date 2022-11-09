import NavigationBar from './components/NavigationBar/NavigationBar';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageLogin from './pages/PageLogin/PageLogin';
import Login from './pages/Login/Login';
import Tentang from './pages/Tentang/Tentang';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import ContactUs from './pages/ContactUs/ContactUs';
import LoginGuru from './pages/LoginGuru/LoginGuru';
import DasboardSiswa from './pages/DasboardSiswa/DasboardSiswa';
import AbsensiSiswa from './pages/Siswa/AbsensiSiswa/AbsensiSiswa';
import MateriSiswa from './pages/Siswa/MateriSiswa/MateriSiswa';
import KalenderAkademik from './pages/KalenderAkademik/KalenderAkademik';
import DasboardGuru from './pages/Guru/DasboardGuru/DasboardGuru';
import PengaturanGuru from './pages/Guru/PengaturanGuru/PengaturanGuru';
import MenuKalender from './pages/Guru/MenuKalender/MenuKalender';
import MateriGuru from './pages/Guru/MateriGuru/MateriGuru';
import Erapor from './pages/Guru/Erapor/Erapor';
import PengaturanSiswa from './pages/Siswa/PengaturanSiswa/PengaturanSiswa';
import axios from 'axios';
import DaftarSiswa from './pages/Guru/DataSiswa/DaftarSiswa';
import EditSiswa from './pages/Guru/DataSiswa/EditSiswa';
import DetailSiswa from './pages/Guru/DataSiswa/DetailSiswa';
import RegisterGuru from './pages/RegisterGuru/RegisterGuru';
import MataPelajaran from './pages/Guru/MataPelajaran/MataPelajaran';
import Kelas from './pages/Guru/Kelas/Kelas';
import AbsensiGuru from './pages/Guru/AbsensiGuru/AbsensiGuru';
import RuangDiskusiGuru from './pages/Guru/RuangDiskusiGuru/RuangDiskusiGuru';
import BuatRuangDiskusi from './pages/Guru/RuangDiskusiGuru/BuatRuangDiskusi';

function App() {
  axios.defaults.baseURL = 'http://localhost:8000';
  // axios.defaults.headers.post['Content-Type'] = 'application/json';
  // axios.defaults.headers.post['Accept'] = 'application/json';
  // axios.defaults.withCredentials = true;
  return (

    <>
      <Routes>
        {/*Halaman Awal */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loginguru' element={<LoginGuru />} />
        <Route path='/tentang' element={<Tentang />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/guru' element={<RegisterGuru />} />
        <Route path='/contactus' element={<ContactUs />} />
        
        {/* Siswa */}
        <Route path='/pengaturansiswa' element={<PengaturanSiswa />} />
        <Route path='/dasboardsiswa' element={<DasboardSiswa />} />
        <Route path='/absensisiswa' element={<AbsensiSiswa />} />
        <Route path='/materisiswa' element={<MateriSiswa />} />
        <Route path='/kalenderakademik' element={<KalenderAkademik />} />
        
        
        {/* Guru */}
        <Route path='/guru/dasboard' element={<DasboardGuru />} />
        <Route path='/pengaturanguru' element={<PengaturanGuru />} />
        <Route path='/kalenderguru' element={<MenuKalender />} />
        <Route path='/guru/materi' element={<MateriGuru />} />
        <Route path='/guru/erapor' element={<Erapor />} />
        <Route path='/daftarsiswa' element={<DaftarSiswa />} />
        <Route path='/daftarsiswa/edit-siswa/:id' element={<EditSiswa />} />
        <Route path='/daftarsiswa/detailsiswa/:id' element={<DetailSiswa />} />
        <Route path='/guru/mata-pelajaran' element={<MataPelajaran />} />
        <Route path='/guru/kelas' element={<Kelas />} />
        <Route path='/guru/absensi' element={<AbsensiGuru />} />
        <Route path='/guru/ruang-diskusi' element={<RuangDiskusiGuru />} />
        <Route path='/guru/ruang-diskusi/buat-ruang-diskusi' element={<BuatRuangDiskusi />} />
      </Routes></>


  );
}

export default App;
