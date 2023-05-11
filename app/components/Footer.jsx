'use client';

import { Grid, Segment, Image, Icon, Container } from 'semantic-ui-react';

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <Segment inverted vertical>
      <Container textAlign='center'>
        <Grid divided columns='equal' inverted /*stackable='true'*/ verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src='/assets/Logos/Logos_Full_Name/Best_Logo_Wide_Name_No_Background.png' alt='Alt logo' size='small' />
            </Grid.Column>
            <Grid.Column width={4}>
              <p>&copy; {getYear} BizBolt Consulting</p>
            </Grid.Column>
            <Grid.Column textAlign='right' width={6}>
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
    </Segment>
  );
};
