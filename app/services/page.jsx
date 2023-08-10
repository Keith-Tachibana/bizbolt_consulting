'use client';

import React, { Component, Suspense } from 'react';

import {
  Accordion,
  Header,
  Icon,
  Segment,
  Button,
  Image,
  Embed,
  List,
  Divider,
  Popup,
  Grid,
  Container,
  Dimmer,
  Loader
} from 'semantic-ui-react';

const level1Panels = [
  {
    key: 'panel-1a',
    title: 'Sales Optimization:',
    content: 'Our team can help you optimize your sales operations, from lead generation to conversion and post-sale retention. We can help you identify and address bottlenecks and inefficiencies in your sales process, leading to increased revenue and improved customer satisfaction.'
  },
  {
    key: 'panel-1b',
    title: 'Sales Process:',
    content: 'We can help you design and implement a sales process that aligns with your business objectives and supports your team\'s success. From lead qualification to closing deals and post-sale follow-up, our experts can help you optimize each stage of the sales process for maximum efficiency and effectiveness.'
  },
  {
    key: 'panel-1c',
    title: 'Sales Tool Adoption:',
    content: 'Our consultants can help you select and implement the right sales tools to support your team\'s success. From CRM software to sales enablement tools, we can help you identify the right technology to improve productivity, collaboration, and revenue growth.'
  }
];

const level2Panels = [
  {
    key: 'panel-2a',
    title: 'Marketing Tech Stack:',
    content: 'Our consultants can help you select and implement the right marketing technology stack to support your team\'s success. From marketing automation to analytics and reporting tools, we can help you integrate the right technology to improve efficiency, productivity, and revenue growth.'
  },
  {
    key: 'panel-2b',
    title: 'Marketing Target Audience:',
    content: 'We can help you identify and target the right audience for your marketing campaigns, based on your business objectives and customer personas. By focusing your marketing efforts on the right audience, you can increase brand awareness, lead generation, and customer engagement.'
  },
  {
    key: 'panel-2c',
    title: 'Marketing Analytics:',
    content: 'Our team can help you measure and analyze your marketing performance, from campaign metrics to customer behavior and sentiment analysis. By leveraging the right marketing analytics tools and strategies, you can optimize your marketing performance and increase revenue growth.'
  }
];

const level3Panels = [
  {
    key: 'panel-3a',
    title: 'Response Time:',
    content: 'We can help you optimize your customer success team\'s response time, from ticket management to customer communication and resolution. By improving response time, you can increase customer satisfaction and retention, and drive revenue growth.'
  },
  {
    key: 'panel-3b',
    title: 'Ticket Systems:',
    content: 'Our team can help you select and implement the right customer success ticketing system to support your team\'s success. From support ticket management to knowledge base creation and customer self-service, we can help you integrate the right technology to improve efficiency, productivity, and customer satisfaction.'
  },
  {
    key: 'panel-3c',
    title: 'Client Retention',
    content: 'We can help you optimize your customer success team\'s retention efforts, from account management to upselling and cross-selling. By identifying and addressing customer needs and pain points, you can increase customer loyalty and retention, and drive revenue growth.'
  }
];

export default class Services extends Component {
  render() {

    const segmentStyle = {
      backgroundColor: '#000000'
    };

    const dividerStyle = {
      width: '100%',
      marginBottom: '2em'
    }

    return (
      <>
        <br />
        <br />
        <br />
        <Header as="h3" className="main-header" textAlign="center" inverted>
          How It's Done
        </Header>
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
                <Image
                  src="/assets/Icons/SVGs/undraw_visual_data_re_mxxo.svg"
                  alt="Redrawing data SVG"
                  size="large"
                  rounded
                />
              </Grid.Column>
              <Grid.Column width={6}>
                <Popup
                  position="bottom center"
                  inverted
                  trigger={
                    <Button size="huge" inverted color="yellow">
                      Whether you're a startup or an established business,
                    </Button>
                  }
                  flowing
                  hoverable
                >
                  <Grid centered columns={1}>
                    <Grid.Column textAlign="center">
                      <p className="paragraph-text" inverted>
                        we're here to help you achieve your goals with
                        customized solutions
                        <br />
                        that are tailored to your individual needs and
                        objectives.
                      </p>
                    </Grid.Column>
                  </Grid>
                </Popup>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Suspense
          fallback={
            <Dimmer active>
              <Loader size="large">Loading...</Loader>
            </Dimmer>
          }
        >
          <Container textAlign="center">
            <Header
              as="h4"
              inverted
              className="main-subheader"
              color="teal"
              textAlign="center"
            >
              Press play!
            </Header>
            <Icon
              name="arrow circle down"
              className="zoom"
              color="teal"
              inverted
              size="huge"
            ></Icon>
            <Grid stackable verticalAlign="middle" inverted padded>
              <Grid.Row textAlign="center">
                <Grid.Column>
                  <Container className="main-embed">
                    <iframe
                      width="873"
                      height="491"
                      src="https://www.youtube.com/embed/swPEh1hbc8g"
                      title="Revenue Operations Best Practices with Bizbolt"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    >
                    </iframe>
                  </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row textAlign="center">
                <Grid.Column className="small-spacing">
                  <Button as="a" href="/demo" inverted color="teal" size="huge">
                    Meet with an Expert
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <hr style={dividerStyle} />
            </Grid>
          </Container>
          <Container textAlign="center">
            <Header as="h3" inverted>
              <p className="service-header">Our Services</p>
            </Header>
            <Grid stackable divided="vertically" inverted>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Website_LordIcons/WY_DATA-server-outline.gif"
                    alt="Data server"
                    size="tiny"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <a id="data">
                          <List.Header as="h1">Data / CRM</List.Header>
                        </a>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <hr style={dividerStyle} />
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/1021-rules-outline (1).gif"
                    alt="Rules outline"
                    size="tiny"
                    verticalAlign="middle"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">Data Hygiene:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          Data hygiene is the process of cleaning and organizing
                          your data to ensure accuracy and completeness. It
                          involves identifying and correcting errors,
                          duplications, and inconsistencies in your data. A
                          clean and organized database can lead to better
                          decision-making, improved customer experiences, and
                          increased efficiency in your operations.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/1683-recycling-outline copy.gif"
                    alt="Recycling outline"
                    size="tiny"
                    verticalAlign="middle"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">Data Automation:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          Data automation streamlines your data processes by
                          using software and technology to reduce errors, save
                          time, and increase productivity. This includes
                          automating data entry, data cleaning, and data
                          analysis tasks. By reducing the need for manual work,
                          data automation can improve accuracy, increase
                          efficiency, and free up time for your team to focus on
                          more strategic tasks.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/19-magnifier-zoom-search-outline.gif"
                    alt="Magnifying glass outline"
                    size="tiny"
                    verticalAlign="middle"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">Full CRM Audit:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          A CRM audit is a comprehensive review of your CRM
                          system to identify areas for improvement, optimize
                          performance, and increase ROI. It includes evaluating
                          your data quality, lead management, sales processes,
                          and customer engagement. By uncovering areas of
                          inefficiency or opportunities for improvement, a CRM
                          audit can help you make data-driven decisions to
                          improve your sales and marketing efforts.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Website_LordIcons/WY_DATA-load-balancer-outline.gif"
                    alt="Load balancer outline"
                    size="tiny"
                    verticalAlign="middle"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">CRM Integrations:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          CRM integrations involve connecting your CRM system
                          with other tools and platforms to create a seamless
                          data flow. This includes integrating your CRM with
                          marketing automation software, customer service tools,
                          or e-commerce platforms. By integrating your systems,
                          you can improve data accuracy, streamline processes,
                          and provide a better customer experience across
                          multiple channels.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Website_LordIcons/WY_DATA-sd-card-outline.gif"
                    alt="SD card outline"
                    size="tiny"
                    verticalAlign="middle"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">Data Migration:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          Data migration involves transferring data from one
                          system to another while ensuring accuracy and
                          security. This includes mapping out data fields,
                          testing data transfers, and verifying data accuracy.
                          By successfully migrating your data, you can minimize
                          downtime and disruptions, avoid data loss or
                          corruption, and ensure your team has access to the
                          information they need to do their jobs effectively.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/970-video-conference-outline copy.gif"
                    alt="Group of people"
                    size="tiny"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <a id="revenue">
                          <List.Header as="h1">Revenue Teams</List.Header>
                        </a>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <hr style={dividerStyle} />
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/950-attract-customers-outline copy.gif"
                    alt="Attract customers outline"
                    size="tiny"
                    verticalAlign="middle"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">Team Synergy:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          By improving communication and collaboration between
                          your sales, marketing, and customer service teams, you
                          can increase productivity, reduce churn, and improve
                          customer satisfaction. Our team can help you identify
                          and implement processes and technologies to improve
                          cross-team collaboration and drive revenue growth.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/412-gift-outline.gif"
                    alt="Gift outline"
                    size="tiny"
                    verticalAlign="middle"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">Sales Teams:</List.Header>
                        <Accordion
                          defaultActiveIndex={[0, 2]}
                          exclusive={false}
                          fluid
                          inverted
                          panels={level1Panels}
                        />
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/27-globe-outline.gif"
                    alt="Globe outline"
                    size="tiny"
                    verticalAlign="middle"
                    className="service-image"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">Marketing Teams:</List.Header>
                        <Accordion
                          defaultActiveIndex={[0, 2]}
                          exclusive={false}
                          fluid
                          inverted
                          panels={level2Panels}
                        />
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/1092-applause-outline copy.gif"
                    alt="Applause outline"
                    size="tiny"
                    verticalAlign="middle"
                    className="service-image"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as="h2">
                          Customer Success Teams:
                        </List.Header>
                        <Accordion
                          defaultActiveIndex={[0, 2]}
                          exclusive={false}
                          fluid
                          inverted
                          panels={level3Panels}
                        />
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image
                    src="/assets/Icons/Gifs/153-bar-chart-growth-outline copy.gif"
                    alt="Group of people"
                    size="tiny"
                  />
                </Grid.Column>
                <Grid.Column>
                  <List celled inverted relaxed>
                    <List.Item>
                      <List.Content>
                        <a id="insight">
                          <List.Header as="h1">
                            Insight &amp; Analytics
                          </List.Header>
                        </a>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <hr style={dividerStyle} />
                        <Image
                          src="/assets/Icons/Gifs/56-document-outline copy.gif"
                          alt="Document outline"
                          size="tiny"
                          verticalAlign="middle"
                        />
                        <List.Header as="h2">
                          Custom Reports &amp; Dashboards:
                        </List.Header>
                        <List.Description as="p" className="paragraph-text">
                          Our experts can help you design and implement custom
                          reports and dashboards to track and visualize your key
                          business metrics. By consolidating data and providing
                          real-time insights, you can make data-driven decisions
                          and improve business performance.
                        </List.Description>
                        <Image
                          src="/assets/Icons/Gifs/955-demand-outline.gif"
                          alt="Demand outline"
                          size="tiny"
                          verticalAlign="middle"
                        />
                        <List.Header as="h2">Full Cycle Reporting:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          We can help you implement a full cycle reporting
                          system that tracks your revenue performance from lead
                          generation to customer retention. By identifying and
                          addressing bottlenecks and inefficiencies in your
                          revenue cycle, you can optimize your revenue growth
                          and improve customer satisfaction.
                        </List.Description>
                        <Image
                          src="/assets/Icons/Gifs/1325-code-fork-outline copy.gif"
                          alt="Code fork outline"
                          size="tiny"
                          verticalAlign="middle"
                        />
                        <List.Header as="h2">Forecasting Revenue:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          Our consultants can help you develop a revenue
                          forecasting model that predicts future revenue growth
                          based on historical data and market trends. By
                          accurately forecasting revenue, you can make informed
                          decisions and develop strategies to improve business
                          performance.
                        </List.Description>
                        <Image
                          src="/assets/Icons/Gifs/WY_Home-consultation-outline.gif.gif"
                          alt="Home consultation outline"
                          size="tiny"
                          verticalAlign="middle"
                        />
                        <List.Header as="h2">Customer Journey:</List.Header>
                        <List.Description as="p" className="paragraph-text">
                          Our team can help you map and optimize your customer
                          journey, from initial contact to post-sale engagement.
                          By understanding your customer's needs and pain
                          points, you can provide a seamless and personalized
                          experience that improves customer satisfaction and
                          drives revenue growth.
                        </List.Description>
            </Grid.Row>
            </Grid>
            </Container>



        </Suspense>
        <Grid centered stackable inverted>
          <Container>
            <Grid.Row textAlign="center">
              <Grid.Column
                className="button-spacing"
                inverted
                textAlign="center"
              >
                <Header
                  as="h4"
                  inverted
                  textAlign="center"
                  color="yellow"
                  className="main-subheader"
                >
                  Questions about our services?
                </Header>
                <Button
                  as="a"
                  href="/demo"
                  inverted
                  color="teal"
                  size="huge"
                  className="main-bottomButton"
                >
                  Talk to our Experts
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </Grid>
      </>
    );
  };
};
