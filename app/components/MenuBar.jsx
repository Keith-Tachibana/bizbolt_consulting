'use client';

import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import { Menu, Image, Button } from 'semantic-ui-react';

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
          stackable
          inverted
        >
          <Menu.Item header>
            <Image size='mini' circular src='/assets/Logos/Logos/500x500_Square_Logo_Yellow_Background.png' />
          </Menu.Item>
          <Menu.Menu>
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
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button
                as='a'
                href='/demo'
                inverted
                color='teal'
              >
                Free Consultation
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </InView>
    );
  };
};
