import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import './JurnalGuru.css'

const JurnalGuru = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <NavBarGuru/>
      <Container className='mt-5'>
          <h3 className='mt-3'>Jurnal Guru</h3>
          <Button size='sm' variant='success' className='add-modul my-3' onClick={() => navigate('modul/buat')}><FaPlus/> Buat Modul Pembelajaran Baru</Button>
          <ul className='list-jurnal'>
              <li onClick={() => navigate('modul')}>List Modul</li>
              <li>List Modul</li>
              <li>List Modul</li>
          </ul>
      </Container>
    </div>
  )
}

export default JurnalGuru