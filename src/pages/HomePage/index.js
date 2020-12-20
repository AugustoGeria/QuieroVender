import React from 'react';
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
        </div>
    );
}

export default HomePage;