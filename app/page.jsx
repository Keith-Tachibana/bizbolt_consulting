'use client';

import React, { Component } from 'react';
import Link from 'next/link';
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
  List,
  Modal,
  Icon,
  Header,
  Dimmer,
  Loader
} from 'semantic-ui-react';

export default class Home extends Component {
  state = { activeIndex: 0, open: false };

  setOpen = () => this.setState({ open: !this.state.open });
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

    const dividerStyle = {
      minWidth: '80vw',
      marginBottom: '2em'
    };

    const paddingStyle = {
      padding: '1em'
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
                          <Header size='huge' inverted>
                            <p className='main-header'>RevOps</p>
                          </Header>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Header size='huge' inverted>
                            <p className='main-header'>Customized For</p>
                          </Header>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Header size='huge' inverted>
                            <p className='main-header'>Your Company</p>
                          </Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign='center'>
                    <Grid.Column style={ paddingStyle }>
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
                  <Grid.Column width={8}>
                    <Header as='h3' className='main-subheader' inverted>
                      Don't let inefficient processes hold your business back.
                    </Header>
                    <Divider as='h4' inverted horizontal className='main-divider'>Take control</Divider>
                    <p className='paragraph-text'>Partner with BizBolt today and take control of your revenue operations.</p>
                    <p className='paragraph-text'>Schedule a free consultation and learn how we can help your business reach its full potential.</p>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Image src='/assets/Icons/Gifs/981-consultation-outline-2.gif' alt='Consultation gif' size='large' rounded />
                  </Grid.Column>
                </Grid.Row>
                <Divider as='h4' horizontal inverted>Watch</Divider>
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
                  <Grid.Column style={ paddingStyle }>
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
          <Segment inverted vertical style={ segmentStyle }>
            <Container>
              <Grid columns='equal' stackable inverted padded>
                <hr style={ dividerStyle }  />
                <Grid.Row centered columns={1}>
                  <Grid.Column>
                    <Header as='h3' className='main-header' textAlign='center' inverted>
                      Why choose BizBolt?
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered textAlign='center' columns={1}>
                  <Grid.Column>
                    <List divided relaxed inverted>
                      <List.Item className='main-bullet1'>
                        <List.Icon name='chart line' size='huge' verticalAlign='middle' />
                        <List.Content>
                          <List.Header className='main-subheader'>Track record of delivering results</List.Header>
                          <List.Description className='main-description'>
                            <p className='paragraph-text'>Our clients have seen an average increase of 25% in revenue growth and a 30% improvement in sales efficiency after working with us.</p>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item className='main-bullet2'>
                        <List.Icon name='database' size='huge' verticalAlign='middle' />
                        <List.Content>
                          <List.Header className='main-subheader'>Data-driven!</List.Header>
                          <List.Description className='main-description'>
                            <p className='paragraph-text'>We understand that every business is unique, which is why we offer customizable solutions tailored to your specific needs.</p>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item className='main-bullet3'>
                        <List.Icon name='edit' size='huge' verticalAlign='middle' />
                        <List.Content>
                          <List.Header className='main-subheader'>Customizable solutions</List.Header>
                          <List.Description className='main-description'>
                            <p className='paragraph-text'>Our solutions are rooted in data analysis, providing a solid foundation for sustainable growth and business decisions.</p>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment inverted vertical style={ segmentStyle }>
            <Container>
              <Grid stackable inverted padded>
                <Grid.Row centered columns={1}>
                  <Grid.Column>
                    <Header as='h3' className='main-header' textAlign='center' inverted>
                      Check out our services
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid stackable inverted padded divded columns={3}>
                <Grid.Row>
                  <Grid.Column>
                    <Link href='/services/#data'>
                      <Header as='h3' inverted textAlign='center' className='main-subheader main-bullet1'>Data / CRM</Header>
                      <Image src='/assets/Icons/Website_LordIcons/WY_DATA-server-outline.gif' size='large' />
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Link href='/services/#revenue'>
                      <Header as='h3' inverted textAlign='center' className='main-subheader main-bullet2'>Revenue Teams</Header>
                      <Image src='/assets/Icons/Gifs/970-video-conference-outline copy.gif' size='large' />
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Link href='/services/#insight'>
                      <Header as='h3' inverted textAlign='center' className='main-subheader main-bullet3'>Insight & Analysis</Header>
                      <Image src='/assets/Icons/Gifs/153-bar-chart-growth-outline copy.gif' size='large' />
                    </Link>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered textAlign='center'>
                  <Grid.Column style={ paddingStyle } textAlign='center'>
                    <Header as='h4' inverted textAlign='center' className='main-subheader'>
                      Any questions?
                    </Header>
                    <Button
                      as='a'
                      href='/contact'
                      inverted
                      color='teal'
                      size='huge'
                      style={{  }}
                    >
                      Contact Us
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
