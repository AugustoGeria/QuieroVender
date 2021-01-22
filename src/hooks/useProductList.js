const useProductList = () => ([{
    id: '1',
    title: "Drone",
    listPrice: 'U$$ 150.0',
    discountedPrice: 'U$$ 130.0',
    colors: "Rojo , Negro , Gris",
    expirationDate: new Date("22 January 2021 21:08 UTC").toISOString(),
    description: "aquí va una descripción",
    groupCapacity: '10',
    suscriptorsNumber: '5',
    discountedPercentage: '15%',
    occupancyPercentage : '50%',
    productPhotoURL: "https://placehold.co/600x400"
  },
  {
    id: '5',
    title: "TV",
    listPrice: 'U$$ 150.0',
    discountedPrice: 'U$$ 130.0',
    colors: "Rojo , Negro , Gris",
    expirationDate: new Date("05 October 2021 14:48 UTC").toISOString(),
    description: "aquí va una descripción",
    groupCapacity: '10',
    suscriptorsNumber: '8',
    discountedPercentage: '15%',
    occupancyPercentage : '80%',
    productPhotoURL: "https://placehold.co/600x400"
  }])
  
  export default useProductList
  