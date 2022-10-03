import React from 'react'
import { Container } from 'react-bootstrap';
import NavBarSiswa from '../../components/NavBarSiswa/NavBarSiswa';
import Searchbar from '../../components/SearchBar/Searchbar';
import Selfie from '../../components/Selfie/Selfie';

const AbsensiSiswa = () => {
  return (
    <div><NavBarSiswa/>
    <Searchbar/>
    <Selfie/></div>
  )
}

export default AbsensiSiswa