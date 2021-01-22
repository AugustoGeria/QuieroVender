import React from 'react'
import PropTypes from 'prop-types'


function GroupOccupancy({occupancyPercentage, suscriptorsNumber, groupCapacity }) {
    
    return (
        <>
          <p>{occupancyPercentage}</p>  
          <p>{suscriptorsNumber} / {groupCapacity} Agrupados </p>
        </>
    );
}

GroupOccupancy.propTypes = {
  occupancyPercentage: PropTypes.string,
  suscriptorsNumber: PropTypes.string,
  groupCapacity: PropTypes.string,
}

export default GroupOccupancy

