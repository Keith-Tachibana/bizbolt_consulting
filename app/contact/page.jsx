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
  TextArea
  SubmitButton,
  ResetButton
} from 'formik-semantic-ui-react';

export default class Contact extends Component {
  render() {
    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
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
      gender: Yup.string().oneOf(["M", "F", "G"]).required(),
      country: Yup.string()
        .oneOf(countryOptions.map((c) => c.value))
        .required()
    });

    return (
      <Segment.Group >
        <Segment inverted padded>
          <Container>
            <Form inverted onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  error={{ content: 'Please enter your first name', pointing: 'below' }}
                  fluid
                  icon={{ name: 'address card', circular: true, link: true }}
                  required
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={this.handleChange}
                  label='First name'
                  placeholder='First name'
                  id='form-input-first-name'
                />
                <Form.Input
                  error='Please enter your last name'
                  fluid
                  icon={{ name: 'address card outline', circular: true, link: true }}
                  required
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={this.handleChange}
                  label='Last name'
                  placeholder='Last name'
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  error='Please enter your company e-mail address'
                  fluid
                  icon={{ name: 'mail', circular: true, link: true }}
                  required
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Company e-mail address'
                  placeholder='Company e-mail address'
                />
              </Form.Group>
              <Form.Group>
                <Label><p>Which topic do you have questions about?</p></Label>
                <Form.Checkbox
                  type='checkbox'
                  name='general'
                  checked={general}
                  onChange={this.handleChange}
                  label='General Questions'
                />
                <Form.Checkbox
                  type='checkbox'
                  name='career'
                  checked={career}
                  onChange={this.handleChange}
                  label='Career Opportunities'
                />
                <Form.Checkbox
                  type='checkbox'
                  name='partnerships'
                  checked={partnerships}
                  onChange={this.handleChange}
                  label='Partnerships'
                />
              </Form.Group>
              <Form.Group>
                <Form.TextArea

                  required
                  placeholder='Enter your comments here'
                  rows={5}
                  label='How can we help you?'
                />
              </Form.Group>
            </Form>
          </Container>
        </Segment>
      </Segment.Group>
    );
  };
};
