import React from "react"
import PropTypes from "prop-types"

import GroupOccupancy from "../GroupOccupancy"
import CountdownTimerContainer from "../CountdownTimerContainer"

import classes from "./index.module.scss"

function ProductCard({
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
    <div className={extended ? classes.cardExtended :classes.card}>
      <img src={productPhotoURL} alt={title} className={classes.imgCard} />
      <div>
        <div className={classes.prices}>
          <h2> {listPrice}</h2>
          <h1> {discountedPrice}</h1>
        </div>
        <h2 className={classes.discount}>{discountedPercentage}</h2>
        <p>{description}</p>
        <p>{colors}</p>
        <GroupOccupancy
          groupCapacity={groupCapacity}
          suscriptorsNumber={suscriptorsNumber}
          occupancyPercentage={occupancyPercentage}
        />
        <CountdownTimerContainer expirationDate={expirationDate} />
        {extended && <button>Ver Oferta</button>}
      </div>
    </div>
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
};

export default ProductCard
