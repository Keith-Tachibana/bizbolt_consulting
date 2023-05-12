'use client';

import {
  Header,
  Segment,
  Grid,
  Container
} from 'semantic-ui-react';

export default function About() {
  return (
    <Segment.Group>
      <Segment inverted padded>
        <Container>
          <Grid>
            <Grid.Row stretched>
              <Grid.Column>
                <Header as='h2' inverted color='teal' attached='top'>
                  <b>BizBolt Overview</b>
                </Header>
                <Segment attached inverted raised style={{ fontSize: '1.25em' }}>
                  <p>Welcome to BizBolt, a leading revenue operations consultancy that drives growth and maximizes revenue for businesses. Our expert consultants employ a data-driven approach to enhance
                    sales, marketing, and customer success operations, delivering measurable results for clients.
                  </p>
                  <p>Our team consists of seasoned professionals with a passion for driving business growth, bringing a wealth of experience from various industries, and a commitment to innovative solutions.
                    We personalize each engagement, working closely with clients to meet their unique business needs and goals.
                  </p>
                  <p>Optimize your revenue operations with BizBolt. Let us elevate your sales processes, improve lead generation and qualification, and enhance customer engagement and retention. We're here
                    to help you reach your growth potential. Schedule a consultation today and experience the difference with BizBolt.
                  </p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column>
                <Header as='h2' inverted color='yellow' attached='top'>
                  <b>Our Mission</b>
                </Header>
                <Segment attached inverted raised style={{ fontSize: '1.25em' }}>
                  <p>BizBolt was founded with the belief that exceptional revenue operations consultants should strive to work themselves out of a job by implementing automation and data-driven solutions.
                    However, these solutions often require ongoing updates and modifications, which is where our consultancy comes in. Our team offers expertise to a variety of businesses, ensuring their
                    revenue operations remain optimized and efficient.
                  </p>
                  <p>At BizBolt, we are dedicated to delivering lasting value to our clients. Our passion for driving business growth, combined with our commitment to innovation, ensures that we stay at
                    the forefront of the revenue operations industry. Our goal is not just to implement solutions, but to build long-term partnerships with our clients, helping them achieve continued
                    success.
                  </p>
                  <p>Join us on our mission to revolutionize revenue operations. Schedule a consultation today and let us help you take your business to the next level.</p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Segment.Group>
  );
};
