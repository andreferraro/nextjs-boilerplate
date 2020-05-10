/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
import React from 'react'
import Link from 'next/link'
import PostList from 'components/PostList'
import Layout from 'components/Layout'
import withApollo from '../lib/with-apollo'

const ListCSR = () => (
  <Layout title="Listing CSR">
    <h1>Listing CSR</h1>
    <PostList />
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </Layout>
)

export default withApollo(ListCSR, { ssr: false })
