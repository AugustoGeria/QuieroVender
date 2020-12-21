import React from 'react';
import CategoryList from '../../components/CategoryList';
import LinkButton from '../../components/LinkButton';

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
            <img src = 'https://placehold.co/1400x400' alt= 'banner'></img>
        </div>
       <div>
           <CategoryList></CategoryList>
       </div>
       
       
       
        </div>
            
        
    );
}

export default HomePage;