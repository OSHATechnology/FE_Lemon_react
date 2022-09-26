import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import NavBarSiswa from '../../components/NavBarSiswa/NavBarSiswa';
import Searchbar from '../../components/SearchBar/Searchbar';
import './DasboardSiswa.css';

const DasboardSiswa = () => {
  return (
    <div><NavBarSiswa/>
    <Searchbar/>
    <h5><div className='labelsi fw-bold'>DASBOARD</div></h5>
    <Container>
    <iframe title="ContohBI" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=fb61fb4e-eceb-4fe7-b8ff-80a352b2d798&autoAuth=true&ctid=101a63ed-7f15-42ed-9b65-d87f03d4ec7e" frameborder="0" allowFullScreen="true"></iframe>
    </Container>
      </div>
  )
}

export default DasboardSiswa