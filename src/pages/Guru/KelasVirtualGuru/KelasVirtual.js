import React from 'react'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru'
import { Container, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './KelasVirtual.css'

const KelasVirtual = () => {
  const navigate = useNavigate()

  return (
    <div>
        <NavBarGuru/>
        <Container className='mt-5'>
            <h3>Kelas Virtual</h3>
            <Button size='sm' variant='success' className='add-room my-3' onClick={() => navigate('buat')}><FaPlus/> Buat Kelas Virtual</Button>
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