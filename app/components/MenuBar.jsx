'use client';

import React, { Component, Suspense } from 'react';
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
                  <button className='hamburger'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Menu.Item>
              </Container>
            </Menu>
          </Suspense>
        </Segment>
      </InView>
    );
  };
};
