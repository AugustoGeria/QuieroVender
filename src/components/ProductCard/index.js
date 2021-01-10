import React, { Fragment } from 'react';

function ProductCard(props) {

    return (
        
           <Fragment>
            <img src = {props.productPhotoURL} alt ={props.title}></img>
            <h1>{props.listPrice}</h1>
            <p>{props.description}</p>    
            {props.extended && <button>Ver Oferta</button>}
            </Fragment>
    )
   
}

export default ProductCard;
