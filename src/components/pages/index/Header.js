import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from "react-bootstrap/Carousel"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        slide1: file(relativePath: { eq: "image1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slide2: file(relativePath: { eq: "image2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slide3: file(relativePath: { eq: "image3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header id="showcase" pauseOnHover="true">
        <Carousel interval="6000">
          <Carousel.Item>
            <Img alt="Slide1" fluid={data.slide1.childImageSharp.fluid} />
            <Carousel.Caption className="d-none d-sm-block text-right mb-5">
              <h1 className="display-3">Heading One</h1>
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                explicabo voluptatibus iste quaerat natus laudantium sed minus
                sunt eaque cumque.
              </p>
              <a href="/" className="btn btn-danger btn-lg">
                Sign Up Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Img alt="Slide2" fluid={data.slide2.childImageSharp.fluid} />
            <Carousel.Caption className="d-none d-sm-block mb-5">
              <h1 className="display-3">Heading Two</h1>
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                explicabo voluptatibus iste quaerat natus laudantium sed minus
                sunt eaque cumque.
              </p>
              <a href="/" className="btn btn-primary btn-lg">
                Learn More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Img alt="Slide3" fluid={data.slide3.childImageSharp.fluid} />
            <Carousel.Caption className="d-none d-sm-block text-right mb-5">
              <h1 className="display-3">Heading Three</h1>
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                explicabo voluptatibus iste quaerat natus laudantium sed minus
                sunt eaque cumque.
              </p>
              <a href="/" className="btn btn-success btn-lg">
                Learn More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
    )}
  />
)

export default Header
