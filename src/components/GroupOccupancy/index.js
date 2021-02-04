import React from 'react'
import PropTypes from 'prop-types'
import {times} from "lodash"

import maleFilled from "../../images/maleFilled.svg"
import maleUnfilled from "../../images/maleUnfilled.svg"

import classes from './index.module.scss'

function GroupOccupancy ({ occupancyPercentage, suscriptorsNumber, groupCapacity }) {
  return (
    <div >
      <div className={classes.figuresContainer}>
        {times(groupCapacity).map((value, index) => <img src={index < suscriptorsNumber? maleFilled : maleUnfilled} alt='' />)}
      </div>
      <div>
      <span className={classes.percentage}>{occupancyPercentage}</span>
      <span className={classes.participantsNumber}>
        {suscriptorsNumber} / {groupCapacity} Agrupados{' '}
      </span>
      </div>
    </div>
  )
}

GroupOccupancy.propTypes = {
  occupancyPercentage: PropTypes.string,
  suscriptorsNumber: PropTypes.string,
  groupCapacity: PropTypes.string
}

export default GroupOccupancy
