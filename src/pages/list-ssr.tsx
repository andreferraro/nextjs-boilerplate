/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import PostList from 'components/PostList'
// eslint-disable-next-line import/extensions
import withApollo from '../lib/with-apollo'

const ListSSR = () => (
  <div>
    <h1>Listing SSR</h1>
    <PostList />
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>
)

export default withApollo(ListSSR)
