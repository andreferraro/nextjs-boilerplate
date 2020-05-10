/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`
export const allPostsQueryVars = {
  skip: 0,
  first: 10
}

const PostList = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true
    }
  )

  const { allPosts, _allPostsMeta } = data
  const areMorePosts = allPosts.length < _allPostsMeta.count

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: allPosts.length
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult
        }
        return {
          ...previousResult // Append the new posts results to the old one
          // allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
        }
      }
    })
  }

  if (error) return <strong>Error loading posts.</strong>
  if (loading && !loadingMorePosts) return <div>Loading</div>

  return (
    <section>
      <ul>
        {allPosts.map((post: any, index: any) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
              <div>
                id=
                {post.id} votes=
                {post.votes}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {areMorePosts && (
        <button
          type="button"
          onClick={() => loadMorePosts()}
          disabled={loadingMorePosts}
        >
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )}
    </section>
  )
}
export default PostList
