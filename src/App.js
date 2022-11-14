import NavigationBar from './components/NavigationBar/NavigationBar';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import Tentang from './pages/Tentang/Tentang';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import ContactUs from './pages/ContactUs/ContactUs';
import LoginGuru from './pages/Auth/LoginGuru/LoginGuru';
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
import JurnalGuru from './pages/Guru/JurnalGuru/JurnalGuru';
import JurnalGuruKelas from './pages/Guru/JurnalGuruKelas/JurnalGuruKelas';
import JurnalGuruSiswa from './pages/Guru/JurnalGuruSiswa/JurnalGuruSiswa';
import AddModulPembelajaran from './pages/Guru/AddModulPembelajaran/AddModulPembelajaran';
import ModulPembelajaran from './pages/Guru/ModulPembelajaran/ModulPembelajaran';
import AddTugas from './pages/Guru/AddTugas/AddTugas';
import KelasVirtual from './pages/Guru/KelasVirtual/KelasVirtual';
import AddKelasVirtual from './pages/Guru/AddKelasVirtual/AddKelasVirtual';
import RegisterGuru from './pages/RegisterGuru/RegisterGuru';
import MataPelajaran from './pages/Guru/MataPelajaran/MataPelajaran';
import Kelas from './pages/Guru/Kelas/Kelas';
import AbsensiGuru from './pages/Guru/AbsensiGuru/AbsensiGuru';
import RuangDiskusiGuru from './pages/Guru/RuangDiskusiGuru/RuangDiskusiGuru';
import BuatRuangDiskusi from './pages/Guru/RuangDiskusiGuru/BuatRuangDiskusi';
import DataErapor from './pages/Guru/Erapor/DataErapor';
import RuangDiskusiSiswa from './pages/Siswa/RuangDiskusiSiswa/RuangDiskusiSiswa';

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
        <Route path='/siswa/dasboard' element={<DasboardSiswa />} />
        <Route path='/absensisiswa' element={<AbsensiSiswa />} />
        <Route path='/materisiswa' element={<MateriSiswa />} />
        <Route path='/kalenderakademik' element={<KalenderAkademik />} />
        <Route path='/siswa/ruang-diskusi' element={<RuangDiskusiSiswa />} />
        
        
        {/* Guru */}
        <Route path='/guru/dasboard' element={<DasboardGuru />} />
        <Route path='/pengaturanguru' element={<PengaturanGuru />} />
        <Route path='/kalenderguru' element={<MenuKalender />} />
        <Route path='/guru/materi' element={<MateriGuru />} />
        <Route path='/guru/erapor' element={<Erapor />} />
        <Route path='/guru/erapor/data' element={<DataErapor />} />
        <Route path='/daftarsiswa' element={<DaftarSiswa />} />
        <Route path='/daftarsiswa/edit-siswa/:id' element={<EditSiswa />} />
        <Route path='/daftarsiswa/detailsiswa/:id' element={<DetailSiswa />} />
        <Route path='/jurnalguru' element={<JurnalGuru />} />
        <Route path='/jurnalguru/modul' element={<ModulPembelajaran />} />
        <Route path='/jurnalguru/modul/buat' element={<AddModulPembelajaran />} />
        <Route path='/jurnalguru/modul/buat-materi' element={<AddTugas />} />
        <Route path='/jurnalguru/modul/kelas' element={<JurnalGuruKelas />} />
        <Route path='/jurnalguru/modul/siswa' element={<JurnalGuruSiswa />} />
        <Route path='/kelasvirtual' element={<KelasVirtual />} />
        <Route path='/kelasvirtual/buat' element={<AddKelasVirtual />} />
        <Route path='/guru/mata-pelajaran' element={<MataPelajaran />} />
        <Route path='/guru/kelas' element={<Kelas />} />
        <Route path='/guru/absensi' element={<AbsensiGuru />} />
        <Route path='/guru/ruang-diskusi' element={<RuangDiskusiGuru />} />
        <Route path='/guru/ruang-diskusi/buat-ruang-diskusi' element={<BuatRuangDiskusi />} />
      </Routes></>


  );
}

export default App;
