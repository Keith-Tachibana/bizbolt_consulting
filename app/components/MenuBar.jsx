'use client';

import React, { Component, Suspense, useState } from 'react';
import { InView } from 'react-intersection-observer';

import {
  Menu,
  Container,
  Image,
  Button,
  Segment,
  Dimmer,
  Dropdown,
  Loader
} from 'semantic-ui-react';

export default class MenuBar extends Component {
  state = {};

  handleItemClick = (event, { name }) => this.setState({ activeItem: name });
  toggleFixedMenu = inView => this.setState({ fixed: !inView });

  render() {
    const { activeItem, fixed } = this.state;

    const segmentStyle = {
      backgroundColor: '#000000'
    };

    const dropdownStyle = {
      color: '#FFFFFF !important',
      margin: '0 auto !important',
      textAlign: 'center !important'
    };

    return (
      <InView onChange={this.toggleFixedMenu}>
        <Segment className="menu-segment" inverted style={segmentStyle}>
          <Suspense
            fallback={
              <Dimmer active>
                <Loader size="large">Loading...</Loader>
              </Dimmer>
            }
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted
              stackable
              size="small"
              borderless
              style={segmentStyle}
              className="menu-wrapper"
            >
              <Container text className="menu-ul">
                <div className="desktop-menu">
                  <Image
                    as="a"
                    href="/"
                    size="small"
                    alt="Alt logo"
                    src="/assets/Logos/Logos_Full_Name/Best_Logo_Wide_Name_No_Background.png"
                  />
                  <Menu.Item
                    as="a"
                    href="/"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  >
                    Home
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    href="/services"
                    name="services"
                    active={activeItem === "services"}
                    onClick={this.handleItemClick}
                  >
                    Services
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    href="/about"
                    name="about"
                    active={activeItem === "about"}
                    onClick={this.handleItemClick}
                  >
                    About
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    href="/contact"
                    name="contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                  >
                    Contact Us
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" href="/demo" inverted color="teal">
                      Free Consultation
                    </Button>
                  </Menu.Item>
                </div>
                <Menu.Menu className="mobile-menu" position="right" inverted>
                  <Image
                    as="a"
                    href="/"
                    size="small"
                    alt="Alt logo"
                    floated="left"
                    src="/assets/Logos/Logos_Full_Name/Best_Logo_Wide_Name_No_Background.png"
                  />
                  <Dropdown icon="bars" size="huge" floated="right">
                    <Dropdown.Menu>
                      <Dropdown.Item
                        as="a"
                        href="/"
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                        style={dropdownStyle}
                      >
                        Home
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="a"
                        href="/services"
                        name="services"
                        active={activeItem === "services"}
                        onClick={this.handleItemClick}
                        style={dropdownStyle}
                      >
                        Services
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="a"
                        href="/about"
                        name="about"
                        active={activeItem === "about"}
                        onClick={this.handleItemClick}
                        style={dropdownStyle}
                      >
                        About
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="a"
                        href="/contact"
                        name="contact"
                        active={activeItem === "contact"}
                        onClick={this.handleItemClick}
                        style={dropdownStyle}
                      >
                        Contact
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Button as="a" href="/demo" inverted color="teal">
                          Free Consultation
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
              </Container>
            </Menu>
          </Suspense>
        </Segment>
      </InView>
    );
  };
};
