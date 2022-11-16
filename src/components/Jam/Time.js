import Moment from 'moment';
import React, { useEffect, useState } from "react";

function Time() {
  const [clockState, setClockState] = useState();
  
  // Time
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute:'2-digit'
      }));
    }, 1000);
  }, []);

  // DateTime
  var idLocale = require('moment/locale/id'); 
  Moment.locale('id', idLocale);

  const formatDate = Moment().format('dddd, DD MMMM YYYY');
  
  return <div style={{ fontSize: "17px"}}>{clockState} - {formatDate}</div>;
}

export default Time;