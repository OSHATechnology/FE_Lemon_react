import React from 'react'
import './KelasVirtual.css'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import { Container, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'

const KelasVirtual = () => {
  return (
    <div>
        <NavBarGuru/>
        <Container>
            <h3 className='mt-3'>Kelas Virtual</h3>
            <Button size='sm' variant='success' className='add-room my-3'><FaPlus/> Buat Kelas Virtual</Button>
            <ul className='list-room'>
                <li>List Room</li>
                <li>List Room</li>
                <li>List Room</li>
            </ul>
        </Container>
    </div>
  )
}

export default KelasVirtual