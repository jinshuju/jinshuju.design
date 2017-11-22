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
  Container
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
        <NavbarBrand href="/">Jinshuju Design</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">品牌</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">市场</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">产品</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

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
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
