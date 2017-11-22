import React from "react";
import {Container, Row, Col} from "reactstrap"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <Row>
        <Col md="3" xs="12">
          <ul>
            <li>
              <a href="/brand/overview">品牌准则</a>
            </li>
            <li>
              <a href="/brand/writing">写作风格</a>
            </li>
            <li>
              <a href="/brand/color">颜色</a>
            </li>
            <li>
              <a href="/brand/illustration">插画/配图</a>
            </li>
            <li>
              <a href="/brand/typography">字体与排版</a>
            </li>
            <li>
              <a href="/brand/logo">Logo</a>
            </li>
          </ul>
        </Col>
        <Col md="9" xs="12">
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
