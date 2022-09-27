import React from 'react'
import { Container } from 'react-bootstrap'
import NavBarSiswa from '../../components/NavBarSiswa/NavBarSiswa'
import Button from 'react-bootstrap/Button';
import './KalenderAkademik.css'

const KalenderAkademik = () => {
  return (
    <div>
        <NavBarSiswa/>
        <Container>
        <h3><div className='kalender'>Kalender Akademik</div></h3>
        <iframe className='kalenderA' title="KalenderAkademik" width="1000" height="500" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTz=0&showTitle=0&src=ZmFyaXpzYWxtYW53QGdtYWlsLmNvbQ&src=aWQuaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23D50000" frameborder="0" allowFullScreen="true"></iframe>
        <p><div className='catatan'>Catatan : Untuk detail informasi, klik info pada kalender akademik.</div></p>
        </Container>
    </div>
  )
}

export default KalenderAkademik