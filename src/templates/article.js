import React from "react";
import {Container, Row, Col} from "reactstrap"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <Row>
        <Col md="9">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Col>
      </Row>
    </Container>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
