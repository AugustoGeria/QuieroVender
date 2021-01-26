import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.scss'
function NavbarLink ({ text }) {
  return <a href='#'>{text}</a>
}

NavbarLink.prototype = {
  text: PropTypes.string
}

export default NavbarLink
