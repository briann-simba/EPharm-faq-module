/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"

import Footer from  "./Reuseable/Footer"
import Navbar from "./Reuseable/Navbar"

const Layout = ({ children }) => (<><Navbar/>{children} 

<Footer superman="E-Pharm"/>
  
  
</>)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
