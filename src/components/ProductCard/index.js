import React from 'react';

function ProductCard(props) {

    return (
        
           <>
            <img src = {props.productPhotoURL} alt ={props.title}></img>
            <h1> U$$ {props.listPrice}</h1>
            <h1> U$$ {props.discountedPrice}</h1>
            <h2>{props.discountedPercentage}%</h2>
            <p>{props.description}</p>   
            <p>{props.colors}</p> 
            {props.extended && <button>Ver Oferta</button>}
            </>
    )
   
}

export default ProductCard;
