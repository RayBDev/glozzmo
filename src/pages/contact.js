import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/common/PageHeader"
import ContactForm from "../components/pages/contact/ContactForm"
import Staff from "../components/pages/contact/Staff"

const services = () => (
  <Layout>
    <SEO title="Contact" keywords={[`contact`, `glozzmo`]} />
    <PageHeader
      pageTitle="Contact"
      subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde."
    />
    <ContactForm />
    <Staff />
  </Layout>
)

export default services
