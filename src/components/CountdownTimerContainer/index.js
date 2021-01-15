import React, { useState, useEffect } from "react";
import CountdownTimer from "../CountdownTimer";
import dayjs from 'dayjs'

function CountdownTimerContainer(props) {
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    const callback = () => setTimeLeft(diffTimer);
    const intervalID = setInterval(callback, 1000);

    return(
       () => clearInterval(intervalID)
    )
  },[props.expirationDate]);
  
  const diffTimer = () => {
      const now = dayjs()
      const expirationDate = dayjs(props.expirationDate)
      return secondsToString(expirationDate.diff(now,'second',true))
  }
  
  function secondsToString(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second =  Math.floor(seconds % 60);
    second = (second < 10)? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  }

  return (  
      <CountdownTimer timeLeft={timeLeft} />
  );
}

export default CountdownTimerContainer
