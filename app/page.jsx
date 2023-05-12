'use client';

import React, { Component } from 'react';

import {
  Grid,
  Container,
  Segment,
  Image,
  Button,
  Embed,
  Divider,
  Accordion,
  Header
} from 'semantic-ui-react';

export default class Home extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;

    const asideStyle = {
      backgroundImage: `url(${'/assets/Icons/Gifs/19-magnifier-zoom-search-outline.gif'})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    const segmentStyle = {
      backgroundImage: `url(${'/assets/Images/Blue_lightning_with_sparks.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    const panels = [
      {
        key: 'become-partner',
        title: {
          content: 'Who can help with my business operations?',
          icon: 'question circle outline',
        },
        content: {
          content: (
            <span>
              Partner with BizBolt today and take control of your revenue operations.
            </span>
          ),
        },
      },
      {
        key: 'first-step',
        title: {
          content: 'What is the first step I need to take?',
          icon: 'question circle outline',
        },
        content: {
          content: (
            <span>
              Schedule a free consultation and learn how we can help your business reach its full potential.
            </span>
          ),
        },
      },
    ]

    return (
      <main>
        <Segment.Group>
          <Segment inverted padded color='black'>
            <Container textAlign='center'>
              <Header size='large' inverted color='teal'>
                <p style={{ padding: '1em' }}>Optimization, Automation, Transformation</p>
              </Header>
            </Container>
          </Segment>
          <Segment inverted padded>
            <Container textAlign='center'>
              <Grid columns='equal' stackable padded>
                <Grid.Row color='black' stretched style={ asideStyle }>
                  <Grid.Column>
                    <Grid.Row color='black'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.25em' }}>RevOps</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.25em' }}>Customized For</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.25em' }}>Your Company</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row color='black' textAlign='center'>
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
                <Grid.Row textAlign='left'>
                  <Grid.Column>
                    <Image src='/assets/Icons/Gifs/981-consultation-outline.gif' alt='Consultation gif' size='large' rounded />
                  </Grid.Column>
                  <Grid.Column >
                    <Accordion
                      inverted
                      defaultActiveIndex={0}
                      panels={panels}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='/assets/Icons/Gifs/981-consultation-outline-2.gif' alt='Consultation gif' size='large' rounded />
                  </Grid.Column>
                </Grid.Row>
                <Divider horizontal inverted></Divider>
              </Grid>
            </Container>
          </Segment>
          <Segment inverted vertical>
            <Container>
              <Grid stackable verticalAlign='middle' inverted padded>
                <Grid.Row color='black' textAlign='center'>
                  <Grid.Column>
                    <Container>
                      <Embed
                        id='cxmrVD45aR4'
                        placeholder='/assets/Images/Video_Design/people-collaborating-with-tech-.png'
                        source='youtube'
                      />
                    </Container>
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
