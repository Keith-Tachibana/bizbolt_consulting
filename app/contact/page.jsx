'use client';

import React, { Component, Suspense } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import countryOptions from './countries';

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
    country: '',
    question: '',
    comments: '',
    file: '',
    submittedFirstName: '',
    submittedLastName: '',
    submittedEmail: '',
    submittedCountry: '',
    submittedQuestion: '',
    submittedComments: '',
    submittedFile: ''
  };

  // handleChange = this.handleChange.bind(this);

  async handleSubmit() {
    const { firstName, lastName, email, country, question, comments, file } = this.state;
    this.setState({
      submittedFirstName: firstName,
      submittedLastName: lastName,
      submittedEmail: email,
      submittedCountry: country,
      submittedQuestion: question,
      submittedComments: comments,
      submittedFile: file
    });
    const data = {
      submittedFirstName,
      submittedLastName,
      submittedEmail,
      submittedCountry,
      submittedQuestion,
      submittedComments,
      submittedFile
    };
    try {
      const res = await fetch(`https://bizbolt-consulting.vercel.app/api/contacts`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await res.json();
      console.log('Result:', result);
    } catch(error) {
      console.error(error.message);
    }
  };

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.checked ?? event.target.value
  //   }, (event) => console.log('Name, Value:', event.target.name, event.target.value));
  // };

  render() {
    // const { firstName, lastName, email, gender, question, comments } = this.state;

    // const countryOptions = [
    //   { name: 'US', value: 'United States' }
    // ];

    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      question: '',
      comments: '',
      file: ''
    };

    const validationSchema = Yup.object({
      firstName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      lastName: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      // gender: Yup.string().oneOf(['male', 'female', 'other']).required('Required'),
      country: Yup.string().oneOf(countryOptions.map(country => country.value)).required('Required'),
      question: Yup.string().oneOf(['generalQuestions', 'careerOpportunities', 'partnerships']).required('Required'),
      comments: Yup.string().max(3000, 'Must be 3,000 characters or less')
    });

    const labelStyle = {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontSize: '1em',
      padding: '0'
    };

    const contactStyle = {
      backgroundColor: '#000000'
    };

    return (
      <>
        <br />
        <br />
        <br />
        <Grid container centered columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" inverted textAlign="center" color="yellow">
                <p>Send us a message with the form below</p>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
        <Suspense
          fallback={
            <Dimmer active>
              <Loader size="large">Loading...</Loader>
            </Dimmer>
          }
        >
          <Grid container centered columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4" inverted textAlign="center">
                  <p className="paragraph-text main-bullet1">
                    E-mail sent to info@bizbolt.com
                  </p>
                </Header>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={this.handleSubmit}
                >
                  <Form inverted size="large">
                    <Input
                      id="input-firstname"
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      label="First Name:"
                      icon="user"
                      iconPosition="left"
                      inverted
                      errorPrompt
                      errorConfig={{
                        pointing: "right"
                      }}
                      // onChange={this.handleChange}
                      // value={firstName}
                    />
                    <Input
                      id="input-lastname"
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      label="Last Name:"
                      icon="users"
                      iconPosition="left"
                      inverted
                      errorPrompt
                      errorConfig={{
                        pointing: "right"
                      }}
                      // onChange={this.handleChange}
                      // value={lastName}
                    />
                    {/* <FormField>
                      <Label htmlFor="gender" style={labelStyle}>
                        Gender:
                      </Label>
                      <FormGroup inline>
                        <Radio
                          id="radio-gender-m"
                          type="radio"
                          name="gender"
                          label="Male"
                          value="male"
                          // checked={gender === "male"}
                          // onChange={this.handleChange}
                          // value={gender}
                        />
                        <Radio
                          id="radio-gender-f"
                          type="radio"
                          name="gender"
                          label="Female"
                          value="female"
                          // checked={gender === "female"}
                          // onChange={this.handleChange}
                          // value={gender}
                        />
                        <Radio
                          id="radio-gender-o"
                          type="radio"
                          name="gender"
                          label="Other"
                          value="other"
                          errorPrompt
                          // checked={gender === "other"}
                          // onChange={this.handleChange}
                          // value={gender}
                        />
                      </FormGroup>
                    </FormField> */}
                    <Input
                      id="input-email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      label="E-mail Address:"
                      icon="mail"
                      iconPosition="left"
                      inverted
                      errorPrompt
                      errorConfig={{
                        pointing: "right"
                      }}
                      // onChange={this.handleChange}
                      // value={email}
                    />
                    <Label htmlFor="select-country" style={labelStyle}>
                      Select your country of origin:
                    </Label>
                    <Select
                      id="select-country"
                      name="country"
                      clearable
                      inverted
                      placeholder="Select your country"
                      options={countryOptions}
                      errorPrompt
                      errorConfig={{
                        pointing: "right"
                      }}
                    />
                    <FormField>
                      <Label htmlFor="question" style={labelStyle}>
                        What is your question about?
                      </Label>
                      <FormGroup inline>
                        <Radio
                          id="radio-question-general"
                          type="radio"
                          name="question"
                          label="General questions"
                          value="generalQuestions"
                          // checked={question === "generalQuestions"}
                          // onChange={this.handleChange}
                          // value={question}
                        />
                        <Radio
                          id="radio-question-career"
                          type="radio"
                          name="question"
                          label="Career opportunities"
                          value="careerOpportunities"
                          // checked={question === "careerOpportunities"}
                          // onChange={this.handleChange}
                          // value={question}
                        />
                        <Radio
                          id="radio-question-partnerships"
                          type="radio"
                          name="question"
                          label="Partnerships"
                          value="partnerships"
                          errorPrompt
                          // checked={question === "partnerships"}
                          // onChange={this.handleChange}
                          // value={question}
                        />
                      </FormGroup>
                    </FormField>
                    <Label htmlFor="comments" style={labelStyle}>
                      Comments:
                    </Label>
                    <TextArea
                      id="comments"
                      name="comments"
                      placeholder="How can we help you?"
                      style={{ minHeight: "100" }}
                      // onChange={this.handleChange}
                      // value={comments}
                    />
                    <Input
                      id="file"
                      type="file"
                      name="file"
                      label="Upload attachments:"
                    />
                    <FormGroup>
                      <SubmitButton color="teal" inverted size="huge">
                        Submit
                      </SubmitButton>
                      <ResetButton color="yellow" inverted size="huge">
                        Reset
                      </ResetButton>
                    </FormGroup>
                    {/* <FormikDebug style={{ color: "#FFFFFF !important" }} /> */}
                  </Form>
                </Formik>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Table style={contactStyle} inverted celled selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell
                        colSpan="2"
                        textAlign="center"
                        className="contacts-header"
                      >
                        Contact Info
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.HeaderCell className="table-header">
                        Company:
                      </Table.HeaderCell>
                      <Table.Cell className="table-text">
                        BizBolt LLC
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell className="table-header">
                        Email:
                      </Table.HeaderCell>
                      <Table.Cell className="table-text">
                        Info@bizbolt.com
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell className="table-header">
                        Phone:
                      </Table.HeaderCell>
                      <Table.Cell className="table-text">
                        +1 (949) 214-4661
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell className="table-header">
                        Address:
                      </Table.HeaderCell>
                      <Table.Cell className="table-text">
                        668 N. Coast Hwy., Apt. 1329, Laguna Beach, CA 92651
                      </Table.Cell>
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
      </>
    );
  };
};
