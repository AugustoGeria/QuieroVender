import React from "react"

import CategoryListContainer from "../../components/CategoryListContainer/index"
import Navbar from "../../components/Navbar"

function HomePage() {
  return (
    <>
      <Navbar/>
      <img src="https://placehold.co/1400x400" alt="banner"/>
      <CategoryListContainer/>
    </>
  )
}

export default HomePage
