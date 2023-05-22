'use client';

import { Suspense } from 'react';

import {
  Grid,
  Segment,
  Image,
  Icon,
  Container,
  Dimmer,
  Loader
} from 'semantic-ui-react';

export default function Footer() {
  const getYear = new Date().getFullYear();

  const segmentStyle = {
    backgroundColor: '#000000'
  };

  return (
    <Segment inverted vertical style={ segmentStyle }>
      <Suspense fallback={<Dimmer active><Loader size='large'>Loading...</Loader></Dimmer>}>
        <Container textAlign='center'>
          <Grid columns='equal' inverted stackable>
            <Grid.Row>
              <Grid.Column>
                <Image
                  centered
                  as='a'
                  href='/'
                  src='/assets/Logos/Logos_Full_Name/Best_Logo_Wide_Name_No_Background.png'
                  alt='Alt logo'
                  size='small' />
              </Grid.Column>
              <Grid.Column textAlign='center' verticalAlign='middle'>
                <p className='paragraph-text'>&copy; {getYear} BizBolt Consulting</p>
              </Grid.Column>
              <Grid.Column >
                <a href='https://www.instagram.com/bizbolt/' target='_blank'>
                  <Icon
                    link
                    circular
                    bordered
                    inverted
                    name='instagram'
                    size='big'
                    color='teal'
                  />
                </a>
                <a href='https://www.linkedin.com/company/92924172/' target='_blank'>
                  <Icon
                    link
                    circular
                    bordered
                    inverted
                    name='linkedin'
                    size='big'
                    color='yellow'
                  />
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Suspense>
    </Segment>
  );
};
