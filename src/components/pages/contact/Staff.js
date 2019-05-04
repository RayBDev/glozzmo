import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Staff = () => (
  <StaticQuery
    query={graphql`
      query {
        person1: file(relativePath: { eq: "person1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        person2: file(relativePath: { eq: "person2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        person3: file(relativePath: { eq: "person3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        person4: file(relativePath: { eq: "person4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="staff" className="py-5 text-center bg-dark text-white">
        <div className="container">
          <h1>Our Staff</h1>
          <hr />
          <div className="row">
            <div className="col-md-3 mb-2">
              <Img
                fluid={data.person1.childImageSharp.fluid}
                className="mb-2 rounded-circle"
                style={{ maxWidth: "12rem", margin: "auto" }}
              />
              <h4>Jane Smith</h4>
              <small>Marketing Manager</small>
            </div>
            <div className="col-md-3 mb-2">
              <Img
                fluid={data.person2.childImageSharp.fluid}
                className="mb-2 rounded-circle"
                style={{ maxWidth: "12rem", margin: "auto" }}
              />
              <h4>Sarah Williams</h4>
              <small>Business Manager</small>
            </div>
            <div className="col-md-3 mb-2">
              <Img
                fluid={data.person3.childImageSharp.fluid}
                className="mb-2 rounded-circle"
                style={{ maxWidth: "12rem", margin: "auto" }}
              />
              <h4>Joseph Smith</h4>
              <small>CEO</small>
            </div>
            <div className="col-md-3 mb-2">
              <Img
                fluid={data.person4.childImageSharp.fluid}
                className="mb-2 rounded-circle"
                style={{ maxWidth: "12rem", margin: "auto" }}
              />
              <h4>Steve Johnson</h4>
              <small>Web Developer</small>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default Staff
