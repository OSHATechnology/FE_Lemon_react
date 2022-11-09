import React, { useEffect, useState } from "react";

function Jam() {

  const [clockState, setClockState] = useState();
  
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div style={{ fontSize: "17px"}}>{clockState}</div>;
}

export default Jam;