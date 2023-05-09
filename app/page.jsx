'use client';

import {
  Grid,
  Container,
  Segment,
  Image,
  Button,
  Embed,
  Accordion,
  Reveal,
  Header } from 'semantic-ui-react';

export default function Home() {
  return (
    <main>
      <Segment.Group>
        <Segment inverted basic padded>
          <Container>
            <Header size='large' inverted color='teal'>
              Optimization, Automation, Transformation
            </Header>
          </Container>
        </Segment>
        <Segment inverted padded>
          <Container>
            <Grid columns='equal' padded>
              <Grid.Row color='black' stretched>
                <Grid.Column>
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
                <Grid.Column>
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
        <Segment inverted padded>
          <Container>
            <Grid stackable columns='equal' verticalAlign='middle' inverted padded>
              <Grid.Row color='black' textAlign='left'>
                <Grid.Column>

                </Grid.Column>
                <Grid.Column>
                  <Image src='/assets/Icons/Gifs/981-consultation-outline-2.gif' size='large' rounded />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment inverted vertical>
          <Container>
            <Grid statckable verticalAlign='middle' inverted padded>
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
};
