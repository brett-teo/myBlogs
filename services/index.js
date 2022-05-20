import {request, gql} from 'graphql-request'

//  graphapi request cms url
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql `
query MyQuery {
  postsConnection {
    edges {
      node {
        author {
          bio
          name
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerppt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}

  `
  const results = await request(graphqlAPI, query)
  return results.postsConnection.edges
}