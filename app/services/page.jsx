'use client';

import React, { Component } from 'react';

import {
  Accordion,
  Header,
  Icon,
  Segment,
  Button,
  Image,
  Embed,
  Grid,
  Container
} from 'semantic-ui-react';

export default class Services extends Component {
  state = { activeIndex: 0 };

  handleClick = (event, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  };

  render() {
    const { activeIndex } = this.state;

      const segmentStyle = {
      backgroundColor: '#000000'
    };

    return (
      <Segment.Group>
        <Segment inverted padded style={ segmentStyle }>
          <Container textAlign='center'>
            <Header size='large' inverted>
              How It's Done
            </Header>
          </Container>
        </Segment>
        <Segment inverted padded style={ segmentStyle }>
          <Container>
            <Grid stackable verticalAlign='middle' inverted padded>
              <Grid.Row textAlign='center'>
                <Grid.Column>
                  <Container>
                    <Embed
                      id='nf8BrMTK9dM'
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
                    Meet with an Expert
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment inverted padded style={ segmentStyle }>
          <Container textAlign='center'>
            <Header size='large' inverted>
              Our Services
            </Header>
          </Container>
        </Segment>
        <Segment inverted padded style={ segmentStyle }>
          <Container textAlign='left'>
            <Header as='h2' inverted>
              <Image size='large' src='/assets/Icons/Website_LordIcons/WY_DATA-server-outline.gif' />
              Data Services / CRM
            </Header>
          </Container>
        </Segment>
        <Accordion styled inverted>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            <Image circular src='/assets/Icons/Website_LordIcons/WY_DATA-server-outline.gif' />
            Data Services / CRM
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </Accordion.Content>
        </Accordion>
      </Segment.Group>
    );
  };
};
