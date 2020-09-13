/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'

const AboutUs = () => (
  <Layout title="About Us">
    <h1>About us</h1>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </Layout>
)

export default AboutUs
