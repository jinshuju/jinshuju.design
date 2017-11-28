import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from "reactstrap";

import "./index.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="faded" light expand="md">
        <Container>
          <Link to="/" className="navbar-brand">Jinshuju Design</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/brand/overview/" className="nav-link">品牌</Link>
              </NavItem>
              <NavItem>
                <NavLink href="/marketing">市场</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/product">产品</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const Footer = () => {
  return (
    <footer>
      <Container>
        Powered by <a href="https://jinshuju.net">Jinshuju</a>
      </Container>
    </footer>
  )
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jinshuju Design"
      meta={[
        {
          name: "description",
          content: "Jinshuju Branding and Product Design Site"
        },
        { name: "keywords", content: "jinshuju, branding, marketing" }
      ]}
    />

    <Header />

    {children()}

    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
