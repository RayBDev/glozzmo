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
            <li className="nav-item active">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about/" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services/" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog/" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/" className="nav-link">
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
