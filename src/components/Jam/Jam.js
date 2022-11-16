import React, { useEffect, useState } from "react";
import './Jam.css';

function Jam() {

  const [clockState, setClockState] = useState();
  
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute:'2-digit'
      }));
    }, 1000);
  }, []);

  return <div style={{ fontSize: "15px"}}>{clockState}</div>;
}

export default Jam;