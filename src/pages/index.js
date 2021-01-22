import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, About, Rooms, Reviews } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Rooms title="i locali" />
    <Reviews />
  </Layout>
)

export default IndexPage
