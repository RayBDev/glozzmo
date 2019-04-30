import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/pages/index/Header"
import Features from "../components/pages/index/Features"
import GetStarted from "../components/pages/index/GetStarted"
import Info from "../components/pages/index/Info"
import Video from "../components/pages/index/Video"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <main>
      <Features />
      <GetStarted />
      <Info />
      <Video />
    </main>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
