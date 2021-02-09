import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import GroupOccupancy from '../GroupOccupancy'
import CountdownTimerContainer from '../CountdownTimerContainer'

import classes from './index.module.scss'

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
  extended,
  hide
}) {
  return (
    <div
      className={classnames({
        [classes.cardExtended]: extended,
        [classes.card]: !extended,
        [classes.hide]: hide
      })}
    >
      <div className={classes.imgContainer}>
        <CountdownTimerContainer
          extended={extended}
          expirationDate={expirationDate}
        />
        <img src={productPhotoURL} alt={title} className={classes.imgCard} />
        <span
          className={classnames({
            [classes.discountExtended]: extended,
            [classes.discount]: !extended
          })}
        >
          {discountedPercentage}
        </span>
      </div>
      <div className={classes.cardInformationContainer}>
        <div className={classes.prices}>
          <span>{listPrice}</span>
          <span>{discountedPrice}</span>
        </div>
        <p className={classes.productDescription}>{description}</p>
        <p className={classes.colorOptions}>{colors}</p>
        <div className={classes.groupMembersContainer}>
          <GroupOccupancy
            groupCapacity={groupCapacity}
            suscriptorsNumber={suscriptorsNumber}
            occupancyPercentage={occupancyPercentage}
          />
          {extended && (
            <button className={classes.offerButton}>Ver oferta</button>
          )}
        </div>
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
}

export default ProductCard
