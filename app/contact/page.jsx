'use client';

import React, { Component } from 'react';
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
  Table
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

export default class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: '',
    checkbox1: '',
    checkbox2: '',
    checkbox3: '',
    comments: '',
    file: ''
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

  handleRadio = event => {
    this.setState({
      gender: event.target.value
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
    const { gender } = this.state;

    const countryOptions = [
      { key: 'af', value: 'af', text: 'Afghanistan' },
      { key: 'dz', value: 'dz', text: 'Algeria' },
      { key: 'as', value: 'as', text: 'American Samoa' },
      { key: 'ad', value: 'ad', text: 'Andorra' },
      { key: 'ao', value: 'ao', text: 'Angola' },
      { key: 'bd', value: 'bd', text: 'Bangladesh' },
      { key: 'bb', value: 'bb', text: 'Barbados' },
      { key: 'by', value: 'by', text: 'Belarus' },
      { key: 'be', value: 'be', text: 'Belgium' },
      { key: 'us', value: 'us', text: 'United States of America' }
    ];

    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      country: '',
      checkbox1: '',
      checkbox2: '',
      checkbox3: '',
      comments: '',
      file: ''
    };

    const validationSchema = Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      gender: Yup.string().oneOf(['Male', 'Female', 'Other']).required(),
      country: Yup.string()
        .oneOf(countryOptions.map(country => country.value))
        .required()
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
      <Segment.Group >
        <Segment inverted padded style={ segmentStyle }>
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
                      value={Formik.v}
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
                      <Label style={ labelStyle }>Gender:</Label>
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
                    <Input
                      type='file'
                      name='file'
                      label='Upload:'
                    />

                  </Form>
                </Formik>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                  <Table inverted celled style={ segmentStyle }>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell colSpan='2' textAlign='center' className='paragraph-text'>Contact Info</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.HeaderCell className='paragraph-text'>Company:</Table.HeaderCell>
                        <Table.Cell className='paragraph-text'>BizBolt LLC</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.HeaderCell className='paragraph-text'>Email:</Table.HeaderCell>
                        <Table.Cell className='paragraph-text'>Info@bizbolt.com</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.HeaderCell className='paragraph-text'>Phone:</Table.HeaderCell>
                        <Table.Cell className='paragraph-text'>+1 (949) 214-4661</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.HeaderCell className='paragraph-text'>Address:</Table.HeaderCell>
                        <Table.Cell className='paragraph-text'>668 N. Coast Hwy., Apt. 1329, Laguna Beach, CA 92651</Table.Cell>
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
        </Segment>
      </Segment.Group>
    );
  };
};
