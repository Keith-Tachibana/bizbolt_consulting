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

const level1Panels = [
  {
    key: 'panel-1a',
    title: 'Data Hygiene',
    content: 'Data hygiene is the process of cleaning and organizing your data to ensure accuracy and completeness. It involves identifying and correcting errors, duplications, and inconsistencies in your data. A clean and organized database can lead to better decision-making, improved customer experiences, and increased efficiency in your operations.'
  },
  {
    key: 'panel-1b',
    title: 'Data Automation',
    content: 'Data automation streamlines your data processes by using software and technology to reduce errors, save time, and increase productivity. This includes automating data entry, data cleaning, and data analysis tasks. By reducing the need for manual work, data automation can improve accuracy, increase efficiency, and free up time for your team to focus on more strategic tasks.'
  },
  {
    key: 'panel-1c',
    title: 'Data CRM',
    content: 'A full CRM audit is a comprehensive review of your CRM system to identify areas for improvement, optimize performance, and increase ROI. It includes evaluating your data quality, lead management, sales processes, and customer engagement. By uncovering areas of inefficiency or opportunities for improvement, a CRM audit can help you make data-driven decisions to improve your sales and marketing efforts.'
  },
  {
    key: 'panel-1d',
    title: 'CRM Integrations',
    content: 'CRM integrations involve connecting your CRM system with other tools and platforms to create a seamless data flow. This includes integrating your CRM with marketing automation software, customer service tools, or e-commerce platforms. By integrating your systems, you can improve data accuracy, streamline processes, and provide a better customer experience across multiple channels.'
  },
  {
    key: 'panel-1e',
    title: 'Data Migration',
    content: 'Data migration involves transferring data from one system to another while ensuring accuracy and security. This includes mapping out data fields, testing data transfers, and verifying data accuracy. By successfully migrating your data, you can minimize downtime and disruptions, avoid data loss or corruption, and ensure your team has access to the information they need to do their jobs effectively.'
  }
];

const level2Panels = [
  {
    key: 'panel-2a',
    title: 'Team Synergy',
    content: 'By improving communication and collaboration between your sales, marketing, and customer service teams, you can increase productivity, reduce churn, and improve customer satisfaction. Our team can help you identify and implement processes and technologies to improve cross-team collaboration and drive revenue growth.'
  }
];

const level2bPanels = [
  {
    key: 'panel-2b-1',
    title: 'Sales Optimization',
    content: 'Our team can help you optimize your sales operations, from lead generation to conversion and post-sale retention. We can help you identify and address bottlenecks and inefficiencies in your sales process, leading to increased revenue and improved customer satisfaction.'
  },
  {
    key: 'panel-2b-2',
    title: 'Sales Process',
    content: 'We can help you design and implement a sales process that aligns with your business objectives and supports your team\'s success. From lead qualification to closing deals and post-sale follow-up, our experts can help you optimize each stage of the sales process for maximum efficiency and effectiveness.'
  },
  {
    key: 'panel-2b-3',
    title: 'Sales Tool Adoption',
    content: 'Our consultants can help you select and implement the right sales tools to support your team\'s success. From CRM software to sales enablement tools, we can help you identify the right technology to improve productivity, collaboration, and revenue growth.'
  }
];

const level2cPanels = [
  {
    key: 'panel-2c-1',
    title: 'Marketing Tech Stack',
    content: 'Our consultants can help you select and implement the right marketing technology stack to support your team\'s success. From marketing automation to analytics and reporting tools, we can help you integrate the right technology to improve efficiency, productivity, and revenue growth.'
  },
  {
    key: 'panel-2c-2',
    title: 'Marketing Target Audience',
    content: 'We can help you identify and target the right audience for your marketing campaigns, based on your business objectives and customer personas. By focusing your marketing efforts on the right audience, you can increase brand awareness, lead generation, and customer engagement.'
  },
  {
    key: 'panel-2c-3',
    title: 'Marketing Analytics',
    content: 'Our team can help you measure and analyze your marketing performance, from campaign metrics to customer behavior and sentiment analysis. By leveraging the right marketing analytics tools and strategies, you can optimize your marketing performance and increase revenue growth.'
  }
];

const level2dPanels = [
  {
    key: 'panel-2d-1',
    title: 'Response Time',
    content: 'We can help you optimize your customer success team\'s response time, from ticket management to customer communication and resolution. By improving response time, you can increase customer satisfaction and retention, and drive revenue growth.'
  },
  {
    key: 'panel-2d-2',
    title: 'Ticket Systems',
    content: 'Our team can help you select and implement the right customer success ticketing system to support your team\'s success. From support ticket management to knowledge base creation and customer self-service, we can help you integrate the right technology to improve efficiency, productivity, and customer satisfaction.'
  },
  {
    key: 'panel-2d-3',
    title: 'Client Retention',
    content: 'We can help you optimize your customer success team\'s retention efforts, from account management to upselling and cross-selling. By identifying and addressing customer needs and pain points, you can increase customer loyalty and retention, and drive revenue growth.'
  }
];

const level1Content = (
  <Header>
    <Icon name='dropdown' />
    <Image circular src='/assets/Icons/Website_LordIcons/WY_DATA-server-outline.gif' />
    Data Services / CRM
    <Accordion.Accordion panels={level1Panels} />
  </Header>
);

const level2Content = (
  <Header>
    <Icon name='dropdown' />
    <Image circular src='/assets/Icons/Gifs/970-video-conference-outline copy.gif' />
    Revenue Teams
    <Accordion.Accordion panels={level2Panels} />
  </Header>
);

const level2bContent = (
  <Header>
    <Icon name='dropdown' />
    <Image circular src='/assets/Icons/SVGs/undraw_financial_data_re_p0fl.svg' />
    Sales Teams
    <Accordion.Accordion panels={level2bPanels} />
  </Header>
);

const level2cContent = (
  <Header>
    <Icon name='dropdown' />
    <Image circular src='/assets/Icons/SVGs/undraw_marketing_re_7f1g.svg' />
    Marketing Teams
    <Accordion.Accordion panels={level2cPanels} />
  </Header>
);

const level2dContent = (
  <Header>
    <Icon name='dropdown' />
    <Image circular src='/assets/Icons/SVGs/undraw_ideas_flow_re_bmea.svg' />
    Customer Success Teams
    <Accordion.Accordion panels={level2dPanels} />
  </Header>
);

export default class Services extends Component {
  render() {
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
            <level1Content />
            <level2Content />
          </Container>
        </Segment>
      </Segment.Group>
    );
  };
};
