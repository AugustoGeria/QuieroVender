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
            <div className={classes.titleContainer}>
              <h1>{categoryTitle}</h1>
              <a>Ver todos</a>
            </div>
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
