import React from "react";
import Link from "gatsby-link";
import { Container, Row, Col } from "reactstrap";

const HomeBlock = ( props ) => (
  <div backgroundColor={props.bgColor}>
    {props.name}
  </div>
);

export default ({ data }) => {
  return (
    <Container>
      <Row>
        <Col md={4} xs={12}><HomeBlock bgColor="red" name="品牌" /></Col>
        <Col md={4} xs={12}><HomeBlock bgColor="red" name="市场" /></Col>
        <Col md={4} xs={12}><HomeBlock bgColor="red" name="产品" /></Col>
      </Row>
    </Container>
  );
};

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
`;
