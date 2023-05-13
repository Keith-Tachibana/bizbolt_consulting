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
  Modal
} from 'semantic-ui-react';

import {
  Form,
  Checkbox,
  Input,
  TextArea,
  Select,
  SubmitButton,
  ResetButton
} from 'formik-semantic-ui-react';

export default class Contact extends Component {
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

  render() {
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
      gender: Yup.string().oneOf(['Male', 'Female', '']).required(),
      country: Yup.string()
        .oneOf(countryOptions.map(country => country.value))
        .required()
    });

    return (
      <Segment.Group >
        <Segment inverted padded>
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
                inverted
                fluid
                errorPrompt
              />
              <Input
                type='text'
                name='lastName'
                placeholder='Last name'
                label='Last Name:'
                inverted
                fluid
                errorPrompt
              />
              <Input
                type='email'
                name='email'
                placeholder='Ex. my@email.com'
                label='E-mail Address:'
                inverted
                fluid
                errorPrompt
              />

            </Form>
          </Formik>
        </Segment>
      </Segment.Group>
    );
  };
};
