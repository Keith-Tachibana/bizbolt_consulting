'use client';

import React, { Component } from 'react';
import {
  Grid,
  Container,
  Segment,
  Image,
  Button,
  Embed,
  Accordion,
  Reveal,
  Card,
  Dimmer,
  Header } from 'semantic-ui-react';

export default class Home extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;

    const asideStyle = {
      backgroundImage: `url(${'/assets/Icons/Gifs/19-magnifier-zoom-search-outline.gif'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    const segmentStyle = {
      backgroundImage: `url(${'/assets/Images/Lightning_Strike-transformed.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <main>
        <Segment.Group>
          <Segment inverted padded>
            <Container>
              <Header size='large' inverted color='teal'>
                <p style={{ padding: '1em' }}>Optimization, Automation, Transformation</p>
              </Header>
            </Container>
          </Segment>
          <Segment inverted padded>
            <Container>
              <Grid columns='equal' padded>
                <Grid.Row color='black' stretched>
                  <Grid.Column style={ asideStyle }>
                    <Grid.Row color='black' textAlign='left'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.25em' }}>RevOps</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black' textAlign='left'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.25em' }}>Customized For</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black' textAlign='left'>
                      <Grid.Column>
                        <Header size='huge' inverted color='yellow'>
                          <p style={{ fontSize: '2.25em' }}>Your Company</p>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column>
                    <Image fluid src='/assets/Images/Optomize.png' />
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
          <Segment inverted padded style={ segmentStyle }>
            <Container>
              <Grid /*stackable='true'*/ columns='equal' verticalAlign='middle' inverted padded>
                <Grid.Row color='black' textAlign='left'>
                  <Grid.Column>
                    <Image src='/assets/Icons/Gifs/981-consultation-outline.gif' alt='Consultation gif' size='large' rounded />
                    <Button icon='thumbs down outline' onClick={this.handleHide} />
                  </Grid.Column>
                  <Grid.Column>
                    <Dimmer.Dimmable dimmed={active}>
                      <Segment basic inverted>
                        <Card>
                          <Card.Content textAlign='center'>
                            <Card.Header>Don't let inefficient processes...</Card.Header>
                            <Card.Meta></Card.Meta>
                            <Card.Description>...hold your business back!</Card.Description>
                          </Card.Content>
                          <Card.Content />
                          <Card.Content extra></Card.Content>
                        </Card>
                      </Segment>
                      <Dimmer active={active} onClickOutside={this.handleHide}>
                        <Segment basic color='teal'>
                          <Card>
                            <Card.Content textAlign='center'>
                              <Card.Header>Partner with BizBolt today!</Card.Header>
                              <Card.Meta></Card.Meta>
                              <Card.Description>Take control of your revenue operations</Card.Description>
                            </Card.Content>
                            <Card.Content />
                            <Card.Content extra></Card.Content>
                          </Card>
                          <p style={{ fontSize: '1.5em' }}>Partner with BizBolt today and take control of your revenue operations. Schedule a free consultation and learn how we can help your business reach its full potential!</p>
                        </Segment>
                      </Dimmer>
                    </Dimmer.Dimmable>
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='/assets/Icons/Gifs/981-consultation-outline-2.gif' alt='Consultation gif' size='large' rounded />
                    <Button icon='thumbs up outline' onClick={this.handleShow} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment inverted vertical>
            <Container>
              <Grid /*statckable='true'*/ verticalAlign='middle' inverted padded>
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
