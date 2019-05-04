import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/common/PageHeader"
import BlogCards from "../components/pages/blog/BlogCards"

const blog = () => (
  <Layout>
    <SEO title="Blog" keywords={[`blog`, `glozzmo`]} />
    <PageHeader pageTitle="Blog" subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde." />
    <BlogCards />
  </Layout>
)

export default blog
