import React from 'react';
import ProductCard from './../ProductCard/index'

function ProductList (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <ProductCard extended ='' img ='https://placehold.co/600x400' price = '350' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
            <ProductCard extended ='' img ='https://placehold.co/600x400' price = '360' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
            <ProductCard extended ='' img ='https://placehold.co/600x400' price = '370' description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am ' ></ProductCard>
            <ProductCard extended='true' img ='https://placehold.co/600x400' price = '340' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
         </div>
    );
}

export default ProductList ;