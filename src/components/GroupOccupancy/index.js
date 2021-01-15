import React from 'react';

function GroupOccupancy(props) {
    
    return (
        <>
          <p>{props.occupancyPercentage}</p>  
          <p>{props.suscriptorsNumber} / {props.groupCapacity} Agrupados </p>
        </>
    );
}

export default GroupOccupancy;