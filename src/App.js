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

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path='/home' element={<Home/>}/>  
      <Route path='/login' element={<Login/>}/>
      <Route path='/tentang' element={<Tentang/>}/>  
      <Route path='/register' element={<Register/>}/>  
      <Route path='/contactus' element={<ContactUs/>}/> 
      <Route path='/loginguru' element={<LoginGuru/>}/>
      <Route path='/dasboardsiswa' element={<DasboardSiswa/>}/>
      <Route path='/absensisiswa' element={<AbsensiSiswa/>}/>
      <Route path='/materisiswa' element={<MateriSiswa/>}/>
      <Route path='/kalenderakademik' element={<KalenderAkademik/>}/>
      </Routes></>
  );
}

export default App;
