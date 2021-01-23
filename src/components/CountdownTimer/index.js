import React from "react";
import PropTypes from 'prop-types'

function CountdownTimer({timeLeft}) {
  return <div>{timeLeft}</div>;
}

CountdownTimer.prototype = {
  timeLeft: PropTypes.string,
}

export default CountdownTimer
