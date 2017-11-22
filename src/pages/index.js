import React from "react"
import Link from "gatsby-link"
import {Container, Row, Col} from "reactstrap"

export default ({ data }) => {

  return (
    <Container>
      <Row>
        <Col md={4}>品牌</Col>
        <Col md={4}>市场</Col>
        <Col md={4}>产品</Col>
      </Row>

      <Row>
        <Col xs={12}>
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
        </Col>
      </Row>

    </Container>

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