import React from "react";
import {Container, Row, Col} from "reactstrap"
import { Helmet } from "react-helmet";
import Link from "gatsby-link";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta
          name="description"
          content={
            post.frontmatter.excerpt
              ? post.frontmatter.excerpt
              : post.excerpt
          }
        />
      </Helmet>
      <Row>
        <Col md="3" xs="12">
          <ul>
            <li>
              <Link to="/brand/overview">品牌准则</Link>
            </li>
            <li>
              <Link to="/brand/writing">写作风格</Link>
            </li>
            <li>
              <Link to="/brand/color">颜色</Link>
            </li>
            <li>
              <Link to="/brand/illustration">插画/配图</Link>
            </li>
            <li>
              <Link to="/brand/typography">字体与排版</Link>
            </li>
            <li>
              <Link to="/brand/logo">Logo</Link>
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
