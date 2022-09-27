import './Jam.css';
import Moment from 'moment';

function Tanggal() {
  var idLocale = require('moment/locale/id'); 
  Moment.locale('id', idLocale);

  const formatDate = Moment().format('dddd, DD MMMM YYYY');
  
  return <div className='Tanggal12' style={{ fontSize: "15px"}}>{formatDate}</div>;
}

export default Tanggal;