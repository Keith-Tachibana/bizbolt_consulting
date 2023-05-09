'use client';

import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import { Menu, Image, Container, Button, Reveal } from 'semantic-ui-react';

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
          stackable
          size='small'
          borderless
        >
          <Container text>
            <Menu.Item
              as='a'
              href='/'
            >
              <Reveal animated='move'>
                <Reveal.Content visible>
                  <Image size='tiny' src='/assets/Logos/Logos_Full_Name/500x500_Logo_Square_Name_Blue_Background.png' />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image size='tiny' src='/assets/Logos/Logos/500x500_Square_Logo_Yellow_Background.png' />
                </Reveal.Content>
              </Reveal>
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
