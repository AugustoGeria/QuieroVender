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
    <div className={extended ? classes.cardExtended : classes.card}>
      <div className={classes.imgContainer}>
      <CountdownTimerContainer extended={extended}  expirationDate={expirationDate} />
        <img src={productPhotoURL} alt={title} className={classes.imgCard} />
        <h2 className={extended ? classes.discountExtended :classes.discount}>{discountedPercentage}</h2>
      </div>
      <div>
        <div className={classes.prices}>
          <h2> {listPrice}</h2>
          <h1> {discountedPrice}</h1>
        </div>
        <p>{description}</p>
        <p>{colors}</p>
        <GroupOccupancy
          groupCapacity={groupCapacity}
          suscriptorsNumber={suscriptorsNumber}
          occupancyPercentage={occupancyPercentage}
        />
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
