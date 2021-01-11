import React from 'react';

function NavbarLink(props) {

    
    return (
            <button onClick = {props.onClick}>
                {props.text}
            </button>
    );
}

export default NavbarLink ;