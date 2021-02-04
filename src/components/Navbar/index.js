import React from 'react'

import NavbarLink from '../NavbarLink'
import cart from "../../images/shopping-cart.svg"

import classes from './index.module.scss'

function Navbar () {
  return (
    <div className ={classes.links}>
      <NavbarLink text='Creá tu cuenta' />
      <NavbarLink text='Ingresá' />
      <NavbarLink iconSource={cart} />
    </div>
  )
}

export default Navbar
