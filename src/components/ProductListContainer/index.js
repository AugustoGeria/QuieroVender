import React from 'react'
import PropTypes from 'prop-types'

import ProductCard from './../ProductCard/index'
import useProductList from '../../hooks/useProductList'

import classes from './styles.module.scss'
function ProductListContainer ({ productsIds, featureProductId }) {
  const productList = useProductList()
  let render = false
  return (
    <div className={classes.cardContainer}>
      {productList.map(
        ({
          id,
          title,
          listPrice,
          discountedPrice,
          colors,
          expirationDate,
          description,
          groupCapacity,
          suscriptorsNumber,
          discountedPercentage,
          occupancyPercentage,
          productPhotoURL
        }, index) => {
          if (id === featureProductId) render = true
          return (
            <ProductCard
              key={id}
              title={title}
              listPrice={listPrice}
              discountedPrice={discountedPrice}
              discountedPercentage={discountedPercentage}
              expirationDate={expirationDate}
              productPhotoURL={productPhotoURL}
              colors={colors}
              description={description}
              groupCapacity={groupCapacity}
              suscriptorsNumber={suscriptorsNumber}
              occupancyPercentage={occupancyPercentage}
              extended={id === featureProductId}
              hide={render && index === 3}
            />
          )
        }
      )}
    </div>
  )
}

ProductListContainer.propTypes = {
  productsIds: PropTypes.array,
  featureProductId: PropTypes.string
}

export default ProductListContainer
