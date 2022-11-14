import Moment from 'moment';
import React, { useEffect, useState } from "react";

function Tanggal() {

    const [clockState, setClockState] = useState();
  
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  var idLocale = require('moment/locale/id'); 
  Moment.locale('id', idLocale);

  const formatDate = Moment().format('dddd, DD MMMM YYYY');
  
  return <div style={{ fontSize: "17px"}}>{clockState} - {formatDate}</div>;
}

export default Tanggal;