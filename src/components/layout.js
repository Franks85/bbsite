import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
