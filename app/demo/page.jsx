'use client';

import React, { Component, Suspense } from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'Yup';

import {
  Header,
  Container,
  Grid,
  Segment,
  Label,
  FormField,
  FormGroup,
  Table,
  Dimmer,
  Loader
} from 'semantic-ui-react';

import {
  Form,
  Checkbox,
  Input,
  TextArea,
  Select,
  Radio,
  SubmitButton,
  ResetButton
} from 'formik-semantic-ui-react';

export default class Demo extends Component {
  state = {
    demoFirstName: '',
    demoLastName: '',
    demoEmail: '',
    demoCompany: '',
    demoQuestion: '',
    demoComments: '',
    demoFile: ''
  };

  handleSubmit  = () => {
    console.log('Submitted');
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleFile = event => {
    event.preventDefault();
    const file = event.target.files[0];
    file['uploadId'] = event.target.id;

    console.log(file);

    const files = this.state.file;
    this.setState({
      file: [...files, file]
    });
  };

  render() {
    const initialValues = {
      demoFirstName: '',
      demoLastName: '',
      demoEmail: '',
      demoCompany: '',
      demoQuestion: '',
      demoComments: '',
      demoFile: ''
    };

    const validationSchema = Yup.object({
      demoFirstName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      demoLastName: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      demoEmail: Yup.string().email('Invalid email address').required('Required'),
      demoCompany: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
      demoQuestion: Yup.string().oneOf(['data', 'revenueTeams', 'insightsAndReporting', 'allServices', 'generalQuestions']).required('Required')
    });

    const segmentStyle = {
      backgroundColor: '#000000'
    };

    const labelStyle = {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontSize: '1em',
      padding: '0'
    };

    return (
      <Segment.Group>
        <Segment inverted padded style={ segmentStyle }>
          <Suspense fallback={<Dimmer active><Loader size='large'>Loading...</Loader></Dimmer>}>
            <Grid container centered columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h1' inverted textAlign='center' style={ segmentStyle }>
                    Demo Form
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h4' inverted textAlign='center' style={ segmentStyle }>
                    <p className='paragraph-text main-bullet1'>E-mail sent to sales@bizbolt.com</p>
                  </Header>
                  <Formik
                    initialValues={ initialValues }
                    validationSchema={ validationSchema }
                    onSubmit={this.handleSubmit}
                  >
                    <Form inverted size='large'>
                      <Input
                        type='text'
                        name='demoFirstName'
                        placeholder='First name'
                        label='First Name:'
                        icon='user'
                        iconPosition='left'
                        inverted
                        errorPrompt
                      />
                      <Input
                        type='text'
                        name='demoLastName'
                        placeholder='Last name'
                        label='Last Name:'
                        icon='users'
                        iconPosition='left'
                        inverted
                        errorPrompt
                      />
                      <Input
                        type='email'
                        name='demoEmail'
                        placeholder='jane@company.com'
                        label='Company E-mail Address:'
                        icon='mail'
                        iconPosition='left'
                        inverted
                        errorPrompt
                      />
                      <Input
                        type='text'
                        name='demoCompany'
                        placeholder='Your company name'
                        label='Company:'
                        icon='briefcase'
                        iconPosition='left'
                        inverted
                        errorPrompt
                      />
                      <FormField>
                        <Label htmlFor='demoQuestion' style={ labelStyle }>What is your question about?</Label>
                        <FormGroup>
                          <Radio
                            type='radio'
                            name='demoQuestion'
                            value='data'
                            label='Data'
                          />
                          <Radio
                            type='radio'
                            name='demoQuestion'
                            value='revenueTeams'
                            label='Revenue Teams'
                          />
                          <Radio
                            type='radio'
                            name='demoQuestion'
                            value='insightsAndReporting'
                            label='Insights &amp; Reporting'
                            errorPrompt
                          />
                          <Radio
                            type='radio'
                            name='demoQuestion'
                            value='allServices'
                            label='All Services'
                            errorPrompt
                          />
                          <Radio
                            type='radio'
                            name='demoQuestion'
                            value='generalQuestions'
                            label='General Questions'
                            errorPrompt
                          />
                        </FormGroup>
                      </FormField>
                      <Label htmlFor='demoComments' style={ labelStyle }>Comments:</Label>
                      <TextArea
                        name='demoComments'
                        placeholder='How can we help you?'
                        style={{ minHeight: '100' }}
                      />
                      <Input
                        type='file'
                        name='demoFile'
                        label='Upload attachments:'
                      />
                      <FormGroup>
                        <SubmitButton color='teal' inverted size='huge'>
                          Submit
                        </SubmitButton>
                        <ResetButton color='yellow' inverted size='huge'>
                          Reset
                        </ResetButton>
                      </FormGroup>
                    </Form>
                  </Formik>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' inverted textAlign='center'>
                    Review our <Link href='/privacy'>privacy policy</Link>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Suspense>
        </Segment>
      </Segment.Group>
    );
  };
};
