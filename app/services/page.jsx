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
  Divider,
  Grid,
  Container,
  Dimmer,
  Loader
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

const level3Panels = [
  {
    key: 'panel-3a',
    title: 'Custom Reports',
    content: 'Our experts can help you design and implement custom reports and dashboards to track and visualize your key business metrics. By consolidating data and providing real-time insights, you can make data-driven decisions and improve business performance.'
  },
  {
    key: 'panel-3b',
    title: 'Full-Cycle Reporting',
    content: 'We can help you implement a full cycle reporting system that tracks your revenue performance from lead generation to customer retention. By identifying and addressing bottlenecks and inefficiencies in your revenue cycle, you can optimize your revenue growth and improve customer satisfaction.'
  },
  {
    key: 'panel-3c',
    title: 'Forecasting Revenue',
    content: 'Our consultants can help you develop a revenue forecasting model that predicts future revenue growth based on historical data and market trends. By accurately forecasting revenue, you can make informed decisions and develop strategies to improve business performance.'
  },
  {
    key: 'panel-3d',
    title: 'Customer Journey',
    content: 'Our team can help you map and optimize your customer journey, from initial contact to post-sale engagement. By understanding your customer\'s needs and pain points, you can provide a seamless and personalized experience that improves customer satisfaction and drives revenue growth.'
  }
];

const level1Content = (
  <Header inverted id='data'>
    <Image src='/assets/Icons/Website_LordIcons/WY_DATA-server-outline.gif' size='large' inverted />
    <Accordion.Accordion panels={level1Panels} inverted />
  </Header>
);

const level2Content = (
  <Header inverted id='revenue'>
    <Accordion.Accordion panels={level2Panels} inverted />
    <Accordion.Accordion panels={level2bPanels} inverted />
    <Accordion.Accordion panels={level2cPanels} inverted />
    <Accordion.Accordion panels={level2dPanels} inverted />
  </Header>
);

const level2bContent = (
  <Header inverted>
    <Icon name='chevron circle down' />
    <Image circular src='/assets/Icons/SVGs/undraw_financial_data_re_p0fl.svg' />
    Sales Teams
    <Accordion.Accordion panels={level2bPanels} inverted />
  </Header>
);

const level2cContent = (
  <Header inverted>
    <Icon name='chevron circle down' />
    <Image circular src='/assets/Icons/SVGs/undraw_marketing_re_7f1g.svg' />
    Marketing Teams
    <Accordion.Accordion panels={level2cPanels} inverted />
  </Header>
);

const level2dContent = (
  <Header inverted>
    <Icon name='chevron circle down' />
    <Image circular src='/assets/Icons/SVGs/undraw_ideas_flow_re_bmea.svg' />
    Customer Success Teams
    <Accordion.Accordion panels={level2dPanels} inverted />
  </Header>
);

const level3Content = (
  <Header inverted id='insight'>
    <Accordion.Accordion panels={level3Panels} inverted />
  </Header>
);

const rootPanels = [
  { key: 'panel-1', title: 'Data Services / CRM', content: { content: level1Content } },
  { key: 'panel-2', title: 'Revenue Teams', content: { content: level2Content } },
  { key: 'panel-3', title: 'Insight & Analytics', content: { content: level3Content } }
];

export default class Services extends Component {
  render() {

    const segmentStyle = {
      backgroundColor: '#000000'
    };

    const dividerStyle = {
      minWidth: '80vw',
      marginBottom: '2em'
    }

    return (
      <Segment.Group>
        <Segment inverted padded style={ segmentStyle }>
          <Suspense fallback={<Dimmer active><Loader size='large'>Loading...</Loader></Dimmer>}>
            <Container textAlign='center'>
              <Header as='h3' className='main-subheader' inverted>
                How It's Done
              </Header>
            </Container>
          </Suspense>
        </Segment>
        <Segment inverted padded style={ segmentStyle }>
          <Suspense fallback={<Dimmer active><Loader size='large'>Loading...</Loader></Dimmer>}>
            <Container>
              <Divider as='h4' inverted horizontal>Watch</Divider>
              <Grid stackable verticalAlign='middle' inverted padded>
                <Grid.Row textAlign='center'>
                  <Grid.Column>
                    <Container className='main-embed'>
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
                <hr style={ dividerStyle }  />
              </Grid>
            </Container>
          </Suspense>
        </Segment>
        <Segment inverted padded style={ segmentStyle }>
          <Suspense fallback={<Dimmer active><Loader size='large'>Loading...</Loader></Dimmer>}>
            <Container textAlign='center'>
              <Header as='h3' className='main-header' inverted>
                Our Services
              </Header>
            </Container>
          </Suspense>
        </Segment>
        <Segment inverted padded style={ segmentStyle }>
          <Suspense fallback={<Dimmer active><Loader size='large'>Loading...</Loader></Dimmer>}>
            <Container textAlign='center'>
              <Accordion defaultActiveIndex={0} panels={rootPanels} inverted />
            </Container>
          </Suspense>
        </Segment>
      </Segment.Group>
    );
  };
};
