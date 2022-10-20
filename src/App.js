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
import AbsensiSiswa from './pages/AbsensiSiswa/AbsensiSiswa';
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

function App() {
  axios.defaults.baseURL = 'http://localhost:8000';
  // axios.defaults.headers.post['Content-Type'] = 'application/json';
  // axios.defaults.headers.post['Accept'] = 'application/json';
  // axios.defaults.withCredentials = true;
  return (

    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tentang' element={<Tentang />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/loginguru' element={<LoginGuru />} />
        <Route path='/dasboardsiswa' element={<DasboardSiswa />} />
        <Route path='/absensisiswa' element={<AbsensiSiswa />} />
        <Route path='/materisiswa' element={<MateriSiswa />} />
        <Route path='/kalenderakademik' element={<KalenderAkademik />} />
        <Route path='/dasboardguru' element={<DasboardGuru />} />
        <Route path='/pengaturanguru' element={<PengaturanGuru />} />
        <Route path='/kalenderguru' element={<MenuKalender />} />
        <Route path='/materiguru' element={<MateriGuru />} />
        <Route path='/erapor' element={<Erapor />} />
        <Route path='/pengaturansiswa' element={<PengaturanSiswa />} />
        <Route path='/daftarsiswa' element={<DaftarSiswa />} />
        <Route path='/daftarsiswa/edit-siswa/:id' element={<EditSiswa />} />
      </Routes></>


  );
}

export default App;
