import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './index.module.scss'

function CountdownTimer ({ timeLeft, extended }) {
  return (
    <div
      className={classnames({
        [classes.timerViewExtended]: extended,
        [classes.timerView]: !extended
      })}
    >
      {timeLeft}
    </div>
  )
}

CountdownTimer.prototype = {
  timeLeft: PropTypes.string,
  extended: PropTypes.bool
}

export default CountdownTimer
