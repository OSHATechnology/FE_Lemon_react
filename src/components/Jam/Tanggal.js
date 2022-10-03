import './Jam.css';
import Moment from 'moment';

function Tanggal() {
  var idLocale = require('moment/locale/id'); 
  Moment.locale('id', idLocale);

  const formatDate = Moment().format('dddd, DD/MM/YYYY');
  
  return <div className='Tanggal12' style={{ fontSize: "13px"}}>{formatDate}</div>;
}

export default Tanggal;