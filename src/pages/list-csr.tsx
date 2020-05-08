import React from 'react'
import Link from 'next/link'
import withApollo from '../lib/with-apollo'
import PostList from 'components/PostList'
import Layout from 'components/Layout'

const ListCSR = () => (
  <Layout title='Listing CSR'>
    <h1>Listing CSR</h1>
    <PostList />
    <Link href='/'>
      <a>Voltar</a>
    </Link>
  </Layout>
)

export default withApollo(ListCSR, { ssr: false })
