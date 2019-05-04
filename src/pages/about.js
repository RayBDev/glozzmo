import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/common/PageHeader"
import AboutUs from "../components/pages/about/AboutUs"
import AboutBoxes from "../components/pages/about/AboutBoxes"
import Testimonials from "../components/pages/about/Testimonials"

const about = () => (
  <Layout>
    <SEO title="About Us" keywords={[`about us`, `glozzmo`]} />
    <PageHeader pageTitle="About Us" subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde."/>
    <AboutUs />
    <AboutBoxes />
    <Testimonials />
  </Layout>
)

export default about
