import React from 'react'
import PropTypes from 'prop-types'

function NavbarLink ({ text }) {
  return <a href='#'>{text}</a>
}

NavbarLink.prototype = {
  text: PropTypes.string
}

export default NavbarLink
