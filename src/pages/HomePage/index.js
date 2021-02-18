import React from 'react'
import Banner from '../../components/Banner'

import CategoryListContainer from '../../components/CategoryListContainer/index'
import Navbar from '../../components/Navbar'

import './index.module.scss'

function HomePage () {
  return (
    <>
      <Navbar />
      <Banner />
      <CategoryListContainer />
    </>
  )
}

export default HomePage
