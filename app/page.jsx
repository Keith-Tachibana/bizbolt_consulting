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
      width: "100%",
      marginBottom: "2em",
    };

    const paddingStyle = {
      padding: '1em'
    };

    return (
      <main>
        <header style={{ height: "300px" }}>
          <span
            ref={(el) => {
              this.el = el;
            }}
            className="typed-span"
          />
        </header>
        <Container textAlign="center">
          <Grid columns="equal" inverted stackable padded>
            <Grid.Row stretched>
              <Grid.Column>
                <Grid.Row>
                  <Grid.Column>
                    <Header size="huge" inverted>
                      <p className="main-header">RevOps</p>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Header size="huge" inverted>
                      <p className="main-header">Customized For</p>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Header size="huge" inverted>
                      <p className="main-header">Your Company</p>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <Grid stackable padded>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingStyle }}>
              <Button as="a" href="/demo" inverted color="teal" size="huge">
                Getting Started
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
        <Container>
          <Grid
            stackable
            columns="equal"
            inverted
            verticalAlign="middle"
            padded
          >
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" className="main-subheader" inverted>
                  Don't let inefficient processes hold your business back.
                </Header>
                <Divider as="h4" inverted horizontal className="main-divider">
                  Take control
                </Divider>
                <p className="paragraph-text">
                  Partner with BizBolt today and take control of your revenue
                  operations.
                </p>
                <p className="paragraph-text">
                  Schedule a free consultation and learn how we can help your
                  business reach its full potential.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image
                  src="/assets/Icons/Gifs/981-consultation-outline-2.gif"
                  alt="Consultation gif"
                  size="large"
                  rounded
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <Container textAlign="center">
          <Header as="h3" inverted className="main-divider" textAlign="center">
            Press play!
          </Header>
          <Icon
            name="arrow circle down"
            className="zoom"
            color="yellow"
            inverted
            size="huge"
          ></Icon>
        </Container>
        <br />
        <br />
        <br />
        <Container>
          <Grid stackable verticalAlign="middle" inverted padded>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <Container className="main-embed">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/cxmrVD45aR4"
                    title="BizBolt Consulting"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  >
                  </iframe>
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="center">
              <Grid.Column style={paddingStyle}>
                <Button as="a" href="/demo" inverted color="teal" size="huge">
                  Talk to an Expert
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container>
          <Grid columns="equal" stackable inverted padded>
            <hr style={dividerStyle} />
            <Grid.Row centered columns={1}>
              <Grid.Column className="main-headerCol">
                <Header
                  as="h3"
                  className="main-header"
                  textAlign="center"
                  inverted
                >
                  Why choose BizBolt?
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered textAlign="center" columns={1}>
              <Grid.Column>
                <List celled relaxed inverted>
                  <List.Item className="main-bullet1">
                    <List.Icon
                      name="chart line"
                      size="huge"
                      color="teal"
                      inverted
                      verticalAlign="middle"
                    />
                    <List.Content className="main-list">
                      <List.Header className="main-subheader">
                        Track record of delivering results
                      </List.Header>
                      <List.Description className="main-description">
                        <p className="paragraph-text">
                          Our clients have seen an average increase of 25% in
                          revenue growth and a 30% improvement in sales
                          efficiency after working with us.
                        </p>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item className="main-bullet2">
                    <List.Icon
                      name="database"
                      size="huge"
                      color="teal"
                      inverted
                      verticalAlign="middle"
                    />
                    <List.Content className="main-list">
                      <List.Header className="main-subheader">
                        Data-driven!
                      </List.Header>
                      <List.Description className="main-description">
                        <p className="paragraph-text">
                          We understand that every business is unique, which is
                          why we offer customizable solutions tailored to your
                          specific needs.
                        </p>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item className="main-bullet3">
                    <List.Icon
                      name="edit"
                      size="huge"
                      color="teal"
                      inverted
                      verticalAlign="middle"
                    />
                    <List.Content className="main-list">
                      <List.Header className="main-subheader">
                        Customizable solutions
                      </List.Header>
                      <List.Description className="main-description">
                        <p className="paragraph-text">
                          Our solutions are rooted in data analysis, providing a
                          solid foundation for sustainable growth and business
                          decisions.
                        </p>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <Grid stackable inverted padded>
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Header
                as="h3"
                className="main-header"
                textAlign="center"
                inverted
              >
                Check out our services
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
        <Container>
          <Grid stackable inverted padded divided columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Link href="/services/#data" rel="noopener">
                  <Header
                    as="h3"
                    inverted
                    textAlign="center"
                    className="main-subheader main-bullet1"
                  >
                    Data / CRM
                  </Header>
                  <Image
                    src="/assets/Icons/Website_LordIcons/WY_DATA-server-outline.gif"
                    size="large"
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link href="/services/#revenue" rel="noopener">
                  <Header
                    as="h3"
                    inverted
                    textAlign="center"
                    className="main-subheader main-bullet2"
                  >
                    Revenue Teams
                  </Header>
                  <Image
                    src="/assets/Icons/Gifs/970-video-conference-outline copy.gif"
                    size="large"
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link href="/services/#insight" rel="noopener">
                  <Header
                    as="h3"
                    inverted
                    textAlign="center"
                    className="main-subheader main-bullet3"
                  >
                    Insight & Analysis
                  </Header>
                  <Image
                    src="/assets/Icons/Gifs/153-bar-chart-growth-outline copy.gif"
                    size="large"
                  />
                </Link>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered inverted textAlign="center">
              <Grid.Column style={paddingStyle} inverted textAlign="center">
                <Header
                  as="h4"
                  inverted
                  textAlign="center"
                  className="main-subheader"
                >
                  Any questions?
                </Header>
                <Button
                  as="a"
                  href="/contact"
                  inverted
                  color="teal"
                  size="huge"
                  className="main-bottomButton"
                >
                  Contact Us
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </main>
    );
  }
};
