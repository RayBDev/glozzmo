import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/pages/index/Header"
import Features from "../components/pages/index/Features"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <main>
      <Features />
    </main>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
