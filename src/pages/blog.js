import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/common/PageHeader"

const blog = () => (
  <Layout>
    <SEO title="Blog" keywords={[`blog`, `glozzmo`]} />
    <PageHeader pageTitle="Blog" />
  </Layout>
)

export default blog
