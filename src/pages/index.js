import React from "react";
import Link from "gatsby-link";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardLink } from "reactstrap";

const HomeBlock = props => (
  <Card>    
    <CardBody>
      <CardTitle>{ props.name }</CardTitle>      
      <CardText>
        { props.description }
      </CardText>
      <CardLink href={props.link }>查看</CardLink>
    </CardBody>
  </Card>
);

export default ({ data }) => {
  return (
    <Container>
      <Row>
        <Col md={4} xs={12}>
          <HomeBlock name="品牌" description="准则，颜色，Logo, 插画等设计原则。" link="/brand/overview" />
        </Col>
        <Col md={4} xs={12}>
          <HomeBlock name="市场" description="市场工作中设计的原则，包括配图、图标、颜色、演讲技巧、视频" link="/marketing/overview"/>
        </Col>
        <Col md={4} xs={12}>
          <HomeBlock name="产品" description="产品工作中的原则，包含控件库、设计范式、排版、图标等" link="/product/overview"/>
        </Col>
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
