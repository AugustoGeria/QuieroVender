import React, { useState, useEffect, useCallback } from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import CountdownTimer from '../CountdownTimer'
import duration from 'dayjs/plugin/duration'

function CountdownTimerContainer ({ expirationDate }) {
  const [timeLeft, setTimeLeft] = useState()
  dayjs.extend(duration)  

  const calculateTimeLeft = useCallback((expirationDate) => {
    const now = dayjs()
    expirationDate = dayjs(expirationDate)
    const difference = expirationDate.diff(now)

    if (difference <= 0) return 'Expired'

    const timeDifference = dayjs.duration({
      hours: expirationDate.diff(now, 'hours'),
      minutes: dayjs(difference).minute(),
      seconds: dayjs(difference).second()
    }).format('HH:mm:ss')

    return timeDifference
  }, [])

  useEffect(() => {
    const callback = () => setTimeLeft(calculateTimeLeft(expirationDate))
    const intervalID = setInterval(callback, 1000)

    return () => clearInterval(intervalID)
  }, [expirationDate, calculateTimeLeft])

  return <CountdownTimer timeLeft={timeLeft} />
}

CountdownTimerContainer.propTypes = {
  expirationDate: PropTypes.string
}

export default CountdownTimerContainer
