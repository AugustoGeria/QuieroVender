import React from 'react';
import NavbarLink from '../NavbarLink';

function Navbar(props) {
    return (
        <div>
            <NavbarLink text = 'hola' onClick = {()=> console.log('redirect to hola ')}></NavbarLink>
            <NavbarLink text = 'carrito'></NavbarLink>
            <NavbarLink text = 'otro'></NavbarLink>
        </div>
    );
}

export default Navbar;
