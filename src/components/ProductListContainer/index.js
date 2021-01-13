import React from "react";
import ProductCard from "./../ProductCard/index";

function ProductListContainer(props) {
  const productList = [
    {
      id: 1,
      title: "Drone",
      listPrice: 150.0,
      discountedPrice: 130.0,
      colors: "Rojo , Negro , Gris",
      expirationDate: new Date("05 October 2011 14:48 UTC").toISOString(),
      description: "aqui va una descripcion",
      groupCapacity: 10,
      suscriptorsNumber: 5,
    },
    {
      id: 2,
      title: "TV",
      listPrice: 150.0,
      discountedPrice: 130.0,
      colors: "Rojo , Negro , Gris",
      expirationDate: new Date("05 October 2011 14:48 UTC").toISOString(),
      description: "aqui va una descripcion",
      groupCapacity: 10,
      suscriptorsNumber: 8,
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
          }) => {
            const discountedPercentage = Math.round(
              (listPrice / discountedPrice) * 100 - 100
            );
            const occupancyPercentage =
              (suscriptorsNumber / groupCapacity) * 100;
            return (
              <ProductCard
                key={id}
                title={title}
                listPrice={`U$$ ${listPrice}`}
                discountedPrice={`U$$ ${discountedPrice}`}
                discountedPercentage={`${discountedPercentage}%`}
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

export default ProductListContainer;
