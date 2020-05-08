import React from 'react'
import Link from 'next/link'
import withApollo from '../lib/with-apollo'
import PostList from 'components/PostList'

const ListSSR = () => (
  <div>
    <h1>Listing SSR</h1>
    <PostList />
    <Link href='/'>
      <a>Voltar</a>
    </Link>
  </div>
)

export default withApollo(ListSSR)
