'use client';

import React, { Component } from 'react';
import Typed from 'typed.js';
import words from './words';

import {
  Grid,
  Container,
  Segment,
  Image,
  Button,
  Embed,
  Divider,
  Rail,
  Icon,
  Accordion,
  Header
} from 'semantic-ui-react';

export default class Home extends Component {
  state = { activeIndex: 0 };

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });
  handleClick = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: '|'
    };
    this.typed = new Typed(this.el, options);
  };

  componentWillUnmount() {
    this.typed.destroy();
  };

  render() {
    const { active, activeIndex } = this.state;

    const segmentStyle = {
      backgroundColor: '#000000'
    };

    return (
      <main>
        <Segment.Group>
          <Segment inverted padded style={ segmentStyle }>
            <Container textAlign='center'>
              <Header size='large' inverted>
                <span
                  ref={(el) => {
                    this.el = el;
                  }}
                  style={{ whiteSpace: 'pre' }}
                />
              </Header>
            </Container>
          </Segment>
          <Segment inverted padded style={ segmentStyle }>
            <Container textAlign='center'>
              <Grid columns='equal' stackable padded>
                <Grid.Row stretched>
                  <Grid.Column>
                    <Grid.Row>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.5em' }}>RevOps</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.5em' }}>Customized For</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.5em' }}>Your Company</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign='center'>
                  <Grid.Column style={{ padding: '1em' }}>
                    <Button
                      as='a'
                      href='/demo'
                      inverted
                      color='teal'
                      size='huge'
                    >
                      Getting Started
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment padded inverted style={ segmentStyle }>
            <Container>
              <Grid stackable columns='equal' inverted verticalAlign='middle' padded>
                <Grid.Row>
                  <Grid.Column>

                  </Grid.Column>
                  <Grid.Column>
                    <Image src='/assets/Icons/Gifs/981-consultation-outline-2.gif' alt='Consultation gif' size='large' rounded />
                  </Grid.Column>
                </Grid.Row>
                <Divider horizontal inverted></Divider>
              </Grid>
            </Container>
          </Segment>
          <Segment inverted vertical style={ segmentStyle }>
            <Container>
              <Grid stackable verticalAlign='middle' inverted padded>
                <Grid.Row textAlign='center'>
                  <Grid.Column>
                    <Container>
                      <Embed
                        id='cxmrVD45aR4'
                        placeholder='/assets/Images/Video_Design/people-collaborating-with-tech-black.png'
                        source='youtube'
                      />
                    </Container>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign='center'>
                  <Grid.Column style={{ padding: '1em' }}>
                    <Button
                      as='a'
                      href='/demo'
                      inverted
                      color='teal'
                      size='huge'
                    >
                      Talk to an Expert
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Segment.Group>
      </main>
    );
  }
};
