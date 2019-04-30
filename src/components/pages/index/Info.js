import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Info = () => (
  <StaticQuery
    query={graphql`
      query {
        laptop: file(relativePath: { eq: "laptop.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="info" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt natus cumque cum facilis eaque sed placeat sapiente
                esse pariatur laudantium!
              </p>
              <a href="/about/" className="btn btn-outline-danger btn-lg">
                Learn More
              </a>
            </div>
            <div className="col-md-6">
              <Img alt="laptop" fluid={data.laptop.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default Info
