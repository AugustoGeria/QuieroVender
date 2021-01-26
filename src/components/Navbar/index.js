import React from 'react'

import NavbarLink from '../NavbarLink'

import classes from './index.module.scss'

function Navbar () {
  return (
    <div className ={classes.links}>
      <NavbarLink text='hola' />
      <NavbarLink text='carrito' />
      <NavbarLink text='otro' />
    </div>
  )
}

export default Navbar
