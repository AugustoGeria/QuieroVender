import React from 'react';
import LinkButton from '../../components/LinkButton';
import ProductCard from '../../components/ProductCard';

function HomePage (props) {
    return (
        <div>
            <LinkButton text = 'hola' onClick = {()=> console.log('redirect to hola ')}>
            </LinkButton>
            <LinkButton text = 'carrito'>
            </LinkButton>
            <LinkButton text = 'otro'>
            </LinkButton>
       <div>
           <ProductCard extended ='' img ='https://placehold.co/600x400' price = '350' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
           <ProductCard extended ='' img ='https://placehold.co/600x400' price = '360' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
           <ProductCard extended ='' img ='https://placehold.co/600x400' price = '370' description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am ' ></ProductCard>
           <ProductCard extended='true' img ='https://placehold.co/600x400' price = '340' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem in tincidunt molestie. Proin finibus, nulla et tempor interdum, risus est hendrerit risus, sit amet aliquam leo nisl id lacus. Pellentesque pharetra tellus elit, sit am '  ></ProductCard>
       </div>
       
       
       
        </div>
            
        
    );
}

export default HomePage;