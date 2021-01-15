import React, { useState, useEffect } from "react";
import CountdownTimer from "../CountdownTimer";

function CountdownTimerContainer(props) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const callback = () => setTimeLeft(timeLeft + 1
        );
    const intervalID = setInterval(callback, 1000);
    
    return(
       () => clearInterval(intervalID)
    )
  },[timeLeft]);

  return (  
      <CountdownTimer timeLeft={timeLeft} />
  );
}

export default CountdownTimerContainer
