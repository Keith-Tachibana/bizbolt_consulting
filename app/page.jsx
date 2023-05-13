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

  render() {
    const { active, activeIndex } = this.state;

    const asideStyle = {
      backgroundImage: `url(${'/assets/Icons/Gifs/19-magnifier-zoom-search-outline.gif'})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    const segmentStyle = {
      backgroundColor: '#000000'
    }

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
                <Grid.Row color='black' stretched>
                  <Grid.Column style={ asideStyle }>
                    <Grid.Row color='black'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.5em' }}>RevOps</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.5em' }}>Customized For</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.5em' }}>Your Company</p>
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
                <Grid.Row>
                  <Grid.Column>
                    <Image src='/assets/Icons/Gifs/981-consultation-outline.gif' alt='Consultation gif' size='large' rounded />
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
                <Grid.Row color='black' textAlign='center'>
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
