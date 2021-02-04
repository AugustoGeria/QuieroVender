import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.scss'
function NavbarLink ({ text, iconSource }) {
  return (
    <a className={classes.navbarLink} href='#'>
      {text}
      {iconSource && <img src={iconSource} alt=""></img>}
    </a>
  )
}

NavbarLink.prototype = {
  text: PropTypes.string,
  iconSource: PropTypes.string
}

export default NavbarLink
