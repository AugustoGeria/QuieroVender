import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.scss'

function CountdownTimer ({ timeLeft,extended }) {
  return <div className={extended? classes.timerViewExtended : classes.timerView}>{timeLeft}</div>
}

CountdownTimer.prototype = {
  timeLeft: PropTypes.string
}

export default CountdownTimer
