import React from 'react'

import ProductListContainer from '../ProductListContainer'
import useCategoryList from '../../hooks/useCategoryList'

import classes from './index.module.scss'

function CategoryListContainer () {
  const categoryList = useCategoryList()

  return (
    <>
      {Object.entries(categoryList).map(([categoryTitle, productsIds]) => {
        const featureProductId = productsIds[0]

        return (
          <div>
            <h1 className={classes.title}>{categoryTitle}</h1>
            <ProductListContainer
              key={categoryTitle}
              productsIds={productsIds}
              featureProductId={featureProductId}
            />
          </div>
        )
      })}
    </>
  )
}

export default CategoryListContainer
