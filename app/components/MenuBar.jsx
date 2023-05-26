'use client';

import React, { Component, Suspense, useState, useEffect, useRef } from 'react';
import { InView } from 'react-intersection-observer';

import {
  Menu,
  Container,
  Image,
  Button,
  Segment,
  Dimmer,
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

    return (
      <InView onChange={this.toggleFixedMenu}>
        <Segment inverted style={ segmentStyle }>
          <Suspense fallback={<Dimmer active><Loader size='large'>Loading...</Loader></Dimmer>}>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted
              stackable='true'
              size='small'
              borderless
              style={ segmentStyle }
              className='menu-wrapper'
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
                  style={{  }}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  as='a'
                  href='/services'
                  name='services'
                  active={activeItem === 'services'}
                  onClick={this.handleItemClick}
                  style={{  }}
                >
                  Services
                </Menu.Item>
                <Menu.Item
                  as='a'
                  href='/about'
                  name='about'
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                  style={{  }}
                >
                  About
                </Menu.Item>
                <Menu.Item
                  as='a'
                  href='/contact'
                  name='contact'
                  active={activeItem === 'contact'}
                  onClick={this.handleItemClick}
                  style={{  }}
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
          </Suspense>
        </Segment>
      </InView>
    );
  };
};
