import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ pageTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        pageHeaderBackground: file(relativePath: { eq: "image3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header id="page-header">
        <div className="container">
          <Img
            fluid={data.pageHeaderBackground.childImageSharp.fluid}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
          <div className="dark-overlay" />
          <div className="row">
            <div className="col-md-6 m-auto text-center text-white">
              <h1>{pageTitle}</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                voluptatum.
              </p>
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header
