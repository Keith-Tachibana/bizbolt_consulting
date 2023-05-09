'use client';

import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import { Menu, Container, Image, Button, Reveal } from 'semantic-ui-react';

export default class MenuBar extends Component {
  state = {};

  handleItemClick = (event, { name }) => this.setState({ activeItem: name });
  toggleFixedMenu = inView => this.setState({ fixed: !inView });

  render() {
    const { activeItem, fixed } = this.state;

    return (
      <InView onChange={this.toggleFixedMenu}>
        <Menu
          fixed={fixed ? 'top' : null}
          inverted
          /*stackable='true'*/
          size='small'
          borderless
        >
          <Container text>
            <Menu.Item
              as='a'
              href='/'
            >
              <Image size='small' alt='Alt logo' src='/assets/Logos/Logos_Full_Name/Best_Logo_Wide_Name_No_Background.png' />
            </Menu.Item>
            <Menu.Item
              as='a'
              href='/'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
            <Menu.Item
              as='a'
              href='/services'
              name='services'
              active={activeItem === 'services'}
              onClick={this.handleItemClick}
            >
              Services
            </Menu.Item>
            <Menu.Item
              as='a'
              href='/about'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              About
            </Menu.Item>
            <Menu.Item
              as='a'
              href='/contact'
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            >
              Contact Us
            </Menu.Item>
            <Menu.Item position='right'>
              <Button
                as='a'
                href='/demo'
                inverted
                color='teal'
              >
                Free Consultation
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </InView>
    );
  };
};
