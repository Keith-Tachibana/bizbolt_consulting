'use client';

import React, { Component, Suspense } from 'react';
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
  ResetButton,
  FormikDebug
} from 'formik-semantic-ui-react';

export default class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: '',
    question: '',
    comments: '',
    file: ''
  };

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const body = this.state;
      console.log('Contact body:', body);
      await fetch('/api/post/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    } catch (error) {
      console.error(error);
    };
  };

  render() {
    const { gender } = this.state;

    const countryOptions = [
      { key: 'US', name: 'United States' }
    ];

    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      country: '',
      question: '',
      comments: '',
      file: ''
    };

    const validationSchema = Yup.object({
      firstName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      lastName: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      gender: Yup.string().oneOf(['male', 'female', 'other']).required('Required'),
      country: Yup.string().oneOf(countryOptions.map(country => country.value)),
      question: Yup.string().oneOf(['generalQuestions', 'careerOpportunities', 'partnerships']).required('Required'),
      comments: Yup.string().max(3000, 'Must be 3,000 characters or less')
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
                    <p>Send us a message with the form below</p>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h4' inverted textAlign='center' style={ segmentStyle }>
                    <p className='paragraph-text main-bullet1'>E-mail sent to info@bizbolt.com</p>
                  </Header>
                  <Formik
                    initialValues={ initialValues }
                    validationSchema={ validationSchema }
                    onSubmit={this.handleSubmit}
                  >
                    <Form inverted size='large'>
                      <Input
                        type='text'
                        name='firstName'
                        placeholder='First name'
                        label='First Name:'
                        icon='user'
                        iconPosition='left'
                        inverted
                        errorPrompt
                      />
                      <Input
                        type='text'
                        name='lastName'
                        placeholder='Last name'
                        label='Last Name:'
                        icon='users'
                        iconPosition='left'
                        inverted
                        errorPrompt
                      />
                      <FormField>
                        <Label htmlFor='gender' style={ labelStyle }>Gender:</Label>
                        <FormGroup inline>
                          <Radio
                            type='radio'
                            name='gender'
                            value='male'
                            label='Male'
                          />
                          <Radio
                            type='radio'
                            name='gender'
                            value='female'
                            label='Female'
                          />
                          <Radio
                            type='radio'
                            name='gender'
                            value='other'
                            label='Other'
                            errorPrompt
                          />
                        </FormGroup>
                      </FormField>
                      <Input
                        type='email'
                        name='email'
                        placeholder='john@example.com'
                        label='E-mail Address:'
                        icon='mail'
                        iconPosition='left'
                        inverted
                        errorPrompt
                      />
                      <Label htmlFor='country' style={ labelStyle }>Select your country of origin:</Label>
                      <Select
                        name='country'
                        clearable
                        inverted
                        placeholder='Select your country'
                        options={countryOptions}
                        errorPrompt
                      />
                      <FormField>
                        <Label htmlFor='question' style={ labelStyle }>What is your question about?</Label>
                        <FormGroup>
                          <Radio
                            type='radio'
                            name='question'
                            value='generalQuestions'
                            label='General questions'
                          />
                          <Radio
                            type='radio'
                            name='question'
                            value='careerOpportunities'
                            label='Career opportunities'
                          />
                          <Radio
                            type='radio'
                            name='question'
                            value='partnerships'
                            label='Partnerships'
                            errorPrompt
                          />
                        </FormGroup>
                      </FormField>
                      <Label htmlFor='comments' style={ labelStyle }>Comments:</Label>
                      <TextArea
                        name='comments'
                        placeholder='How can we help you?'
                        style={{ minHeight: '100' }}
                      />
                      <Input
                        type='file'
                        name='file'
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
                      <FormikDebug />
                    </Form>
                  </Formik>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Table inverted celled style={ segmentStyle }>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell colSpan='2' textAlign='center' className='contacts-header'>Contact Info</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.HeaderCell className='table-header'>Company:</Table.HeaderCell>
                        <Table.Cell className='table-text'>BizBolt LLC</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.HeaderCell className='table-header'>Email:</Table.HeaderCell>
                        <Table.Cell className='table-text'>Info@bizbolt.com</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.HeaderCell className='table-header'>Phone:</Table.HeaderCell>
                        <Table.Cell className='table-text'>+1 (949) 214-4661</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.HeaderCell className='table-header'>Address:</Table.HeaderCell>
                        <Table.Cell className='table-text'>668 N. Coast Hwy., Apt. 1329, Laguna Beach, CA 92651</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell />
                        <Table.Cell></Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Suspense>
        </Segment>
      </Segment.Group>
    );
  };
};
