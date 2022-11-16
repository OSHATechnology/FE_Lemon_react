import React from 'react';
import { Container } from 'react-bootstrap'
import NavBarGuru from '../../../components/NavBarGuru/NavBarGuru';
import './MenuKalender.css'

const MenuKalender = () => {
  return (
    <div>
        <NavBarGuru/>
          <Container className='mt-5'>
            <h3 className='text-center'>Kalender Akademik</h3>
            <iframe className='w-100' title="KalenderAkademik" height="500" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTz=0&showTitle=0&src=ZmFyaXpzYWxtYW53QGdtYWlsLmNvbQ&src=aWQuaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23D50000" frameborder="0" allowFullScreen="true"></iframe>
            <p>Catatan : Untuk detail informasi, klik info pada kalender akademik.</p>
        </Container>
    </div>
  )
}

export default MenuKalender