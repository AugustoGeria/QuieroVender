import React from 'react';
import ProductCard from './../ProductCard/index'

function ProductListContainer(props) {
    return (
        <div>
            <h1>{props.categoryTitle}</h1>
            <ProductCard extended ='' img ='https://placehold.co/600x400' listPrice = '350' discountedPrice = '300'  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
            <ProductCard extended ='' img ='https://placehold.co/600x400' listPrice = '360' discountedPrice = '300' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
            <ProductCard extended ='' img ='https://placehold.co/600x400' listPrice = '370' discountedPrice = '300' description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am ' ></ProductCard>
            <ProductCard extended='true' img ='https://placehold.co/600x400' listPrice = '340' discountedPrice = '300' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
         </div>
    );
}

export default ProductListContainer;