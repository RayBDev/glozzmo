import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/pages/index/Header"
import Features from "../components/pages/index/Features"
import GetStarted from "../components/pages/index/GetStarted"
import Info from "../components/pages/index/Info"
import Video from "../components/pages/index/Video"
import Gallery from "../components/pages/index/Gallery"
import Newsletter from "../components/pages/index/Newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`home`, `glozzmo`]} />
    <Header />
    <main>
      <Features />
      <GetStarted />
      <Info />
      <Video />
      <Gallery />
      <Newsletter />
    </main>
  </Layout>
)

export default IndexPage
