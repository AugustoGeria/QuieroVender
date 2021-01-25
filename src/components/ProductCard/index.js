import React from 'react'
import PropTypes from 'prop-types'

import GroupOccupancy from '../GroupOccupancy'
import CountdownTimerContainer from '../CountdownTimerContainer'

function ProductCard ({
  title,
  listPrice,
  discountedPrice,
  discountedPercentage,
  expirationDate,
  productPhotoURL,
  colors,
  description,
  groupCapacity,
  suscriptorsNumber,
  occupancyPercentage,
  extended
}) {
  return (
    <>
      <img src={productPhotoURL} alt={title} />
      <h1> {listPrice}</h1>
      <h1> {discountedPrice}</h1>
      <h2>{discountedPercentage}</h2>
      <p>{description}</p>
      <p>{colors}</p>
      <GroupOccupancy
        groupCapacity={groupCapacity}
        suscriptorsNumber={suscriptorsNumber}
        occupancyPercentage={occupancyPercentage}
      />
      <CountdownTimerContainer expirationDate={expirationDate} />
      {extended && <button>Ver Oferta</button>}
    </>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string,
  listPrice: PropTypes.string,
  discountedPrice: PropTypes.string,
  discountedPercentage: PropTypes.string,
  expirationDate: PropTypes.string,
  productPhotoURL: PropTypes.string,
  colors: PropTypes.string,
  description: PropTypes.string,
  groupCapacity: PropTypes.string,
  suscriptorsNumber: PropTypes.string,
  occupancyPercentage: PropTypes.string,
  extended: PropTypes.bool
}

export default ProductCard
