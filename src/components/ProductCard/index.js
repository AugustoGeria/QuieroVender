import React from 'react';
import GroupOccupancy from '../GroupOccupancy';
import Timer from '../Timer';

function ProductCard(props) {

    return (
        
           <>
            <img src = {props.productPhotoURL} alt ={props.title}></img>
            <h1> U$$ {props.listPrice}</h1>
            <h1> U$$ {props.discountedPrice}</h1>
            <h2>{props.discountedPercentage}%</h2>
            <p>{props.description}</p>   
            <p>{props.colors}</p> 
            <GroupOccupancy groupCapacity = {props.groupCapacity} suscriptorsNumber ={props.suscriptorsNumber} occupancyPercentage={props.occupancyPercentage} ></GroupOccupancy>
            <Timer expirationDate = {props.expirationDate}></Timer>
            {props.extended && <button>Ver Oferta</button>}
            </>
    )
   
}

export default ProductCard;
