import React from "react"
import Navbar from "react-bootstrap/Navbar"

const Navigation = ({ siteTitle }) => {
  return (
    <Navbar expand="md" bg="dark" variant="dark" fixed="top">
      <div className="container">
        <Navbar.Brand href="index.html">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about/" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/services/" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog/" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact/" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation
