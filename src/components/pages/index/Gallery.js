import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Modal from "react-bootstrap/Modal"

class Gallery extends Component {
  state = {
    show: false,
    imageQueryName: "galleryImage1",
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = imageQueryName => {
    this.setState({ show: true, imageQueryName })
  }
  render() {
    const GalleryRow = (photoData, rowNumber) => {
      let gallery = []
      for (let key in photoData) {
        gallery.push(
          <div key={Math.random()} className="col-md-4">
            <div onClick={() => this.handleShow([key])}>
              <Img fluid={photoData[key].childImageSharp.fluid} />
            </div>
          </div>
        )
      }

      let row = gallery.filter((galleryRow, index) => {
        if (rowNumber === 1 && index < 3) {
          return galleryRow
        }
        if (rowNumber === 2 && index > 2 && index < 6) {
          return galleryRow
        }
        if (rowNumber === 3 && index > 5 && index < 9) {
          return galleryRow
        } else return null
      })

      return <div className="row mb-4">{row}</div>
    }
    return (
      <StaticQuery
        query={graphql`
          query {
            galleryImage1: file(relativePath: { eq: "gallery1.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            galleryImage2: file(relativePath: { eq: "gallery2.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            galleryImage3: file(relativePath: { eq: "gallery3.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            galleryImage4: file(relativePath: { eq: "gallery4.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            galleryImage5: file(relativePath: { eq: "gallery5.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            galleryImage6: file(relativePath: { eq: "gallery6.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <section id="gallery" className="py-5">
            <div className="container">
              <h1 className="text-center">Photo Gallery</h1>
              <p className="text-center">Check out our photos</p>
              {GalleryRow(data, 1)}
              {GalleryRow(data, 2)}
              <Modal
                show={this.state.show}
                onHide={this.handleClose}
                animation="true"
                centered
              >
                <Modal.Header closeButton />
                <Modal.Body>
                  <Img
                    fluid={
                      data[this.state.imageQueryName].childImageSharp.fluid
                    }
                  />
                </Modal.Body>
              </Modal>
            </div>
          </section>
        )}
      />
    )
  }
}

export default Gallery
