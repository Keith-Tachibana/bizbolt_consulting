'use client';

import React, { Component } from 'react';
import { Header, Container, Grid, Segment, Label, Form, Button } from 'semantic-ui-react';

export default class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    general: false,
    career: false,
    partnership: false,
    submittedFirstName: '',
    submittedLastName: '',
    submittedEmail: '' }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { firstName, lastName, email } = this.state;

    this.setState({ submittedFirstName: firstName, submittedLastName: lastName, submittedEmail: email });
    this.setState({ firstName: '', lastName: '', email: '' });
  }

  render() {
    return (
      <Segment.Group >
        <Segment inverted padded>
          <Container>
            <Form inverted onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  error={{ content: 'Please enter your first name', pointing: 'below' }}
                  fluid
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
              </Form.Group>
            </Form>
          </Container>
        </Segment>
      </Segment.Group>
    );
  };
};
