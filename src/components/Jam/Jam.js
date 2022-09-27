import React, { useEffect, useState } from "react";
import './Jam.css';

function Jam() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className='clock12' style={{ fontSize: "20px"}}>{clockState}</div>;
}

export default Jam;