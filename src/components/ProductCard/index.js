import React, { Fragment } from 'react';

function ProductCard(props) {
   if(!(props.extended))
   { return (
        
           <Fragment>
            <img src = {props.img} alt ={props.name}></img>
            <h1>{props.price}</h1>
            <p>{props.description}</p>    
            </Fragment>
    )}
   else{
    return (
        
        <Fragment>
         <img src = {props.img}alt = {props.name}></img>
         <h1>{props.price}</h1>
         <p>{props.description}</p>    
         <h1>EXTENDIDO</h1>
         </Fragment>
    )

   }
}

export default ProductCard;
