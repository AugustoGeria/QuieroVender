import React from 'react'

import ProductListContainer from '../ProductListContainer'
import useCategoryList from '../../hooks/useCategoryList'

function CategoryListContainer () {
  const categoryList = useCategoryList()

  return (
    <>
      {Object.entries(categoryList).map(([categoryTitle, productsIds]) => {
        const featureProductId = productsIds[0]

        return (
          <div>
            <h1>{categoryTitle}</h1>
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
