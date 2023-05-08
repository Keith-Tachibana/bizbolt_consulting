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
          <Header size='large' inverted color='teal'>
            Optimization, Automation, Transformation
          </Header>
        </Segment>
        <Segment inverted vertical size='massive'>
          <Grid stackable columns='equal' inverted padded>
            <Grid.Row color='black' inverted stretched>
              <Grid.Column>
                <Grid.Row color='black' textAlign='left'>
                  <Grid.Column>
                    <Header size='huge' inverted color='yellow' className='home-header'>
                      RevOps
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row color='black' textAlign='left'>
                  <Grid.Column>
                    <Header size='huge' inverted color='yellow' className='home-header'>
                      Customized For
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row color='black' textAlign='left'>
                  <Grid.Column>
                    <Header size='huge' inverted color='yellow' className='home-header'>
                      Your Company
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <Image fluid src='/assets/Images/Optomize.png' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row color='black' inverted textAlign='center'>
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
        </Segment>
        <Segment inverted>
          <Grid stackable columns='equal' verticalAlign='middle' inverted padded>
            <Grid.Row color='black' textAlign='left'>
              <Grid.Column>
                <Reveal animated='rotate'>
                  <Reveal.Content visible>
                    <Image circular size='large' src='/assets/Images/Video_Design/BlueCloudHeading.png' />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image circular size='large' src='/assets/Images/Video_Design/BlueCloud2.png' />
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
              <Grid.Column>
                <Image src='/assets/Icons/Gifs/981-consultation-outline-2.gif' size='large' rounded />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted vertical>
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
        </Segment>
      </Segment.Group>
    </main>
  );
};
