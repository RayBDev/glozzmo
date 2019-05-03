import React from "react"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/common/PageHeader"
import AboutUs from "../components/pages/about/AboutUs"
import AboutBoxes from "../components/pages/about/AboutBoxes"

const about = () => (
  <Layout>
    <SEO title="About Us" keywords={[`about us`, `glozzmo`]} />
    <PageHeader pageTitle="About Us" />
    <AboutUs />
    <AboutBoxes />
  </Layout>
)

export default about
