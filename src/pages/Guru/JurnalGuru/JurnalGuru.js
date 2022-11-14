import React from 'react'
import './JurnalGuru.css'
import { Container, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'

const JurnalGuru = () => {
  return (
    <div>
        <NavBarGuru/>
        <Container>
            <h3 className='mt-3'>Jurnal Guru</h3>
            <Button size='sm' variant='success' className='add-modul my-3'><FaPlus/> Buat Modul Pembelajaran Baru</Button>
            <ul className='list-jurnal'>
                <li>List Modul</li>
                <li>List Modul</li>
                <li>List Modul</li>
            </ul>
        </Container>
    </div>
  )
}

export default JurnalGuru