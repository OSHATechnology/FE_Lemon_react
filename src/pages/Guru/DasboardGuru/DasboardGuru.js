import React from 'react'
import { Container } from 'react-bootstrap'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import Searchbar from '../../../components/SearchBar/Searchbar'
import './DasboardGuru.css'

const DasboardGuru = () => {
  return (
    <div>
      <NavBarGuru/>
      <Container className='mt-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold'>DASBOARD</h5>
          <Searchbar/>
        </div>
        <iframe title="ContohBI" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=fb61fb4e-eceb-4fe7-b8ff-80a352b2d798&autoAuth=true&ctid=101a63ed-7f15-42ed-9b65-d87f03d4ec7e" frameborder="0" allowFullScreen="true"></iframe>
      </Container>
     </div>
  )
}

export default DasboardGuru