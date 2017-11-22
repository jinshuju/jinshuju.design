import React from "react"
import Link from "gatsby-link"

export default ({ data }) => {

  return (
    <div>
      <h1>
        Amazing Pandas Eating Things
      </h1>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
            <span color="#BBB">— {node.frontmatter.date}</span>
          </h3>
          </Link>
          <p>
            {node.excerpt}
          </p>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`