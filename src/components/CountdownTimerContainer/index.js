import React, { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs"
import PropTypes from 'prop-types'

import CountdownTimer from "../CountdownTimer"


function CountdownTimerContainer({expirationDate}) {
  const [timeLeft, setTimeLeft] = useState();
  const duration = require('dayjs/plugin/duration')
  dayjs.extend(duration)  

  const diffTimer = useCallback((expirationDate) => {
    const now = dayjs()
    expirationDate = dayjs(expirationDate)
    const difference = expirationDate.diff(now)
    const endPromTime = dayjs.duration({
      hours: expirationDate.diff(now, 'hours'),
      minutes: dayjs(difference).minute(),
      seconds: dayjs(difference).second()
    }).format('HH:mm:ss')
    
    return endPromTime <=0 ? 'Expired' : endPromTime
  }, []);

  useEffect(() => {
    const callback = () => setTimeLeft(diffTimer(expirationDate));
    const intervalID = setInterval(callback, 1000);

    return () => clearInterval(intervalID);
  }, [expirationDate, diffTimer]);

  return <CountdownTimer timeLeft={timeLeft} />;
}

CountdownTimerContainer.propTypes = {
  expirationDate: PropTypes.string
}

export default CountdownTimerContainer;
