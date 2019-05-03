import React from "react"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"

const Navigation = ({ siteTitle }) => {
  return (
    <Navbar expand="md" bg="dark" variant="dark" fixed="top">
      <div className="container">
        <Navbar.Brand href="index.html">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about/" className="nav-link" activeClassName="active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services/"
                className="nav-link"
                activeClassName="active"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog/" className="nav-link" activeClassName="active">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact/"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation
