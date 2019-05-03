import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogCards = () => (
  <StaticQuery
    query={graphql`
      query {
        blogPostImage1: file(relativePath: { eq: "blog1.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blogPostImage2: file(relativePath: { eq: "blog2.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blogPostImage3: file(relativePath: { eq: "blog3.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="blog" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card-columns">
                <div className="card">
                  <Img fluid={data.blogPostImage1.childImageSharp.fluid} />
                  <div className="card-body">
                    <h4 className="card-title">Blog Post One</h4>
                    <small className="text-muted">
                      Written by Joe on 05/20
                    </small>
                    <hr />
                    <p className="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae, eveniet accusamus est earum maxime quibusdam
                      exercitationem minus rerum id illum laboriosam aut quas
                      eligendi adipisci! At quam assumenda deserunt dicta!
                    </p>
                  </div>
                </div>

                <div className="card p-3">
                  <blockquote className="card-blockquote card-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto ab maxime explicabo exercitationem a doloribus?
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        someone Famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>

                <div className="card">
                  <Img fluid={data.blogPostImage2.childImageSharp.fluid} />
                  <div className="card-body">
                    <h4 className="card-title">Blog Post Two</h4>
                    <small className="text-muted">
                      Written by Karen on 05/22
                    </small>
                    <hr />
                    <p className="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae, eveniet accusamus est earum maxime quibusdam
                      exercitationem minus rerum id illum laboriosam aut quas
                      eligendi adipisci! At quam assumenda deserunt dicta!
                    </p>
                  </div>
                </div>

                <div className="card p-3 bg-danger text-white">
                  <blockquote className="card-blockquote card-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto ab maxime explicabo exercitationem a doloribus?
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-white">
                        someone Famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card">
                  <Img fluid={data.blogPostImage3.childImageSharp.fluid} />
                  <div className="card-body">
                    <h4 className="card-title">Blog Post Three</h4>
                    <small className="text-muted">
                      Written by Ray on 05/24
                    </small>
                    <hr />
                    <p className="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae, eveniet accusamus est earum maxime quibusdam
                      exercitationem minus rerum id illum laboriosam aut quas
                      eligendi adipisci! At quam assumenda deserunt dicta!
                    </p>
                  </div>
                </div>

                <div className="card p-3">
                  <blockquote className="card-blockquote card-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto ab maxime explicabo exercitationem a doloribus?
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        someone Famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default BlogCards
