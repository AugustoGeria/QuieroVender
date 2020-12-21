import React from 'react';
import ProductList from '../ProductList';

function CategoryList(props) {
    return (
        <div>
            <ProductList title = 'List Title 1'></ProductList>
            <ProductList title = 'List Title 2'></ProductList>
        </div>
    );
}

export default CategoryList;