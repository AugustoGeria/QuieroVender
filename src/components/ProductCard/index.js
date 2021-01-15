import React from "react";
import GroupOccupancy from "../GroupOccupancy";
import CountdownTimerContainer from "../CountdownTimerContainer";

function ProductCard(props) {
  return (
    <>
      <img src={props.productPhotoURL} alt={props.title}></img>
      <h1> {props.listPrice}</h1>
      <h1> {props.discountedPrice}</h1>
      <h2>{props.discountedPercentage}</h2>
      <p>{props.description}</p>
      <p>{props.colors}</p>
      <GroupOccupancy
        groupCapacity={props.groupCapacity}
        suscriptorsNumber={props.suscriptorsNumber}
        occupancyPercentage={props.occupancyPercentage}
      ></GroupOccupancy>
      <CountdownTimerContainer expirationDate={props.expirationDate}></CountdownTimerContainer>
      {props.extended && <button>Ver Oferta</button>}
    </>
  );
}

export default ProductCard;
