import React from "react";
import ProductCard from "./../ProductCard/index";

function ProductListContainer(props) {
  const productList = [
    {
      id: 1,
      title: "Drone",
      listPrice: 'U$$ 150.0',
      discountedPrice: 'U$$ 130.0',
      colors: "Rojo , Negro , Gris",
      expirationDate: new Date("16 January 2021 21:08 UTC").toISOString(),
      description: "aqui va una descripcion",
      groupCapacity: '10',
      suscriptorsNumber: '5',
      discountedPercentage: '15%',
      occupancyPercentage : '50%'
    },
    {
      id: 2,
      title: "TV",
      listPrice: 'U$$ 150.0',
      discountedPrice: 'U$$ 130.0',
      colors: "Rojo , Negro , Gris",
      expirationDate: new Date("05 October 2021 14:48 UTC").toISOString(),
      description: "aqui va una descripcion",
      groupCapacity: '10',
      suscriptorsNumber: '8',
      discountedPercentage: '15%',
      occupancyPercentage : '80%'
    },
  ];

  return (
    <div>
      <h1>{props.categoryTitle}</h1>
      <div>
        {productList.map(
          ({
            id,
            title,
            listPrice,
            discountedPrice,
            colors,
            expirationDate,
            description,
            groupCapacity,
            suscriptorsNumber,
            discountedPercentage,
            occupancyPercentage
          }) => {
    
            return (
              <ProductCard
                key={id}
                title={title}
                listPrice={listPrice}
                discountedPrice={discountedPrice}
                discountedPercentage={discountedPercentage}
                expirationDate={expirationDate}
                productPhotoURL="https://placehold.co/600x400"
                colors={colors}
                description={description}
                groupCapacity={groupCapacity}
                suscriptorsNumber={suscriptorsNumber}
                occupancyPercentage={occupancyPercentage}
                extended={id === props.featureProductId}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default ProductListContainer

