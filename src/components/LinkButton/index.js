import React from 'react';

function LinkButton (props) {

    
    return (
            <button onClick = {props.onClick}>
                {props.text}
            </button>
    );
}

export default LinkButton ;