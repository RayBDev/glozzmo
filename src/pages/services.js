import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/common/PageHeader"
import Pricing from "../components/pages/services/Pricing"
import FAQ from "../components/pages/services/FAQ"

const services = () => (
  <Layout>
    <SEO title="Services" keywords={[`services`, `glozzmo`]} />
    <PageHeader pageTitle="Services" />
    <Pricing />
    <FAQ />
  </Layout>
)

export default services
