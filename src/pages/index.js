import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, About, Rooms } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Rooms title="i locali" />
  </Layout>
)

export default IndexPage
