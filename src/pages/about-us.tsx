import React from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'

export default () => {
  return (
    <Layout title='About Us'>
      <h1>About us</h1>
      <Link href='/'><a>Voltar</a></Link>
    </Layout>
  )
}
