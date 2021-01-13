import React from 'react';
import ProductListContainer from '../ProductListContainer';

function CategoryListContainer() {
    
    const categoryList = {
        tech: [1,2,3,4],
        food: [5,6,7,8]
      }
      
   
    return(
        <>
            { Object.entries(categoryList).map(([categoryTitle,productsIds]) => {   
                const featureProductId = productsIds[0];      
                return (
                        <ProductListContainer key={categoryTitle} categoryTitle = {categoryTitle} productsIds = {productsIds} featureProductId = {featureProductId}></ProductListContainer>
                );
            })
            }
        </>
    )
}

export default CategoryListContainer
