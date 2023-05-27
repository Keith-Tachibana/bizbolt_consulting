'use client';

import { Suspense } from 'react';

import {
  Header,
  Segment,
  Grid,
  Container,
  Dimmer,
  Loader
} from 'semantic-ui-react';

export default function About() {

  const segmentStyle = {
    backgroundColor: '#000000'
  };

  const aboutStyle = {
    backgroundColor: '#000000',
    fontSize: '1.25em'
  };

  return (
    <>
      <br />
      <br />
      <br />
      <Header as='h2' inverted color='teal' textAlign='center'>
        <b className='about-header'>BizBolt Overview</b>
      </Header>
      <br />
      <br />
      <br />
      <Segment inverted padded style={ segmentStyle }>
        <Suspense fallback={<Dimmer active><Loader size='large'>Loading...</Loader></Dimmer>}>
          <Container>
            <Grid>
              <Grid.Row stretched>
                <Grid.Column>
                  <Segment inverted style={ aboutStyle }>
                    <p className='paragraph-text'>Welcome to BizBolt, a leading revenue operations consultancy that drives growth and maximizes revenue for businesses. Our expert consultants employ a data-driven approach to enhance
                      sales, marketing, and customer success operations, delivering measurable results for clients.
                    </p>
                    <p className='paragraph-text'>Our team consists of seasoned professionals with a passion for driving business growth, bringing a wealth of experience from various industries, and a commitment to innovative solutions.
                      We personalize each engagement, working closely with clients to meet their unique business needs and goals.
                    </p>
                    <p className='paragraph-text'>Optimize your revenue operations with BizBolt. Let us elevate your sales processes, improve lead generation and qualification, and enhance customer engagement and retention. We're here
                      to help you reach your growth potential. Schedule a consultation today and experience the difference with BizBolt.
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column>
                  <Header as='h2' inverted color='yellow' textAlign='center' style={ segmentStyle }>
                    <b className='about-header'>Our Reason</b>
                  </Header>
                  <Segment inverted style={ aboutStyle }>
                    <p className='paragraph-text'>BizBolt was founded with the belief that exceptional revenue operations consultants should strive to work themselves out of a job by implementing automation and data-driven solutions.
                      However, these solutions often require ongoing updates and modifications, which is where our consultancy comes in. Our team offers expertise to a variety of businesses, ensuring their
                      revenue operations remain optimized and efficient.
                    </p>
                    <p className='paragraph-text'>At BizBolt, we are dedicated to delivering lasting value to our clients. Our passion for driving business growth, combined with our commitment to innovation, ensures that we stay at
                      the forefront of the revenue operations industry. Our goal is not just to implement solutions, but to build long-term partnerships with our clients, helping them achieve continued
                      success.
                    </p>
                    <p className='paragraph-text'>Join us on our mission to revolutionize revenue operations. Schedule a consultation today and let us help you take your business to the next level.</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Suspense>
      </Segment>
    </>
  );
};
