import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutUs = () => (
  <StaticQuery
    query={graphql`
      query {
        aboutUs: file(relativePath: { eq: "about.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="about" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>What We Do</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                in cupiditate perferendis voluptas deleniti numquam officia
                dignissimos aut delectus aliquam corrupti doloremque similique
                esse possimus maxime impedit est, odit quae veritatis dolorum
                dolor, dolores obcaecati! Facilis alias eligendi minus, pariatur
                magnam cumque, praesentium nam dolores quia excepturi ut non
                numquam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                asperiores impedit accusamus. Molestias id eveniet eaque
                reprehenderit animi eligendi perspiciatis distinctio maxime
                suscipit nisi recusandae, debitis velit quasi consequuntur ab
                nam temporibus obcaecati saepe dignissimos necessitatibus sequi
                dicta. Vel, excepturi facere! Omnis nisi mollitia perferendis
                illo nam. Porro, sunt illum!
              </p>
            </div>
            <div className="col-md-6">
              <Img
                fluid={data.aboutUs.childImageSharp.fluid}
                className="rounded-circle d-none d-md-block about-img"
              />
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default AboutUs
