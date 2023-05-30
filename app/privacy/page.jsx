'use client';

import { Suspense } from 'react';

import {
  Header,
  Container,
  Grid,
  Segment,
  Divider,
  List,
  Dimmer,
  Loader
} from 'semantic-ui-react';

export default function Privacy() {
  return (
    <Suspense
      fallback={
        <Dimmer active>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      }
    >
      <Container>
        <Grid stackable inverted padded>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h1"
                inverted
                className="main-header"
                textAlign="center"
                color='yellow'
              >
                Privacy Policy for BizBolt
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h4"
                inverted
                className="privacy-subheader"
                textAlign="left"
              >
                Privacy Policy
              </Header>
              <hr />
              <Container style={{ color: "#FFFFFF" }}>
                <small className="privacy-text">
                  Last updated: February 15, 2023
                  <br />
                  <br />
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                  <br />
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy. This
                  Privacy Policy has been created with the help of the Free
                  Privacy Policy Generator.
                  <br />
                </small>
              </Container>
              <Header
                as="h2"
                inverted
                className="privacy-subheader"
                textAlign="left"
              >
                Interpretation and Definitions
              </Header>
              <hr />
              <Header
                as="h3"
                inverted
                textAlign="left"
                className="privacy-subsubheader"
              >
                Interpretation
              </Header>
              <Container style={{ color: "#FFFFFF" }}>
                <small className="privacy-text">
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </small>
              </Container>
              <Header
                as="h3"
                inverted
                textAlign="left"
                className="privacy-subsubheader"
              >
                Definitions
              </Header>
              <Container style={{ color: "#FFFFFF" }}>
                <small className="privacy-text">
                  For the purposes of this Privacy Policy:
                  <br />
                  Account means a unique account created for You to access our
                  Service or parts of our Service.
                  <br />
                  Affiliate means an entity that controls, is controlled by or
                  is under common control with a party, where "control" means
                  ownership of 50% or more of the shares, equity interest or
                  other securities entitled to vote for election of directors or
                  other managing authority.
                  <br />
                  Company (referred to as either "the Company", "We", "Us" or
                  "Our" in this Agreement) refers to Bizbolt LLC, "668 N. Coast
                  Hwy, Appt. 1329 Laguna Beach, CA 92651".
                  <br />
                  Cookies are small files that are placed on Your computer,
                  mobile device or any other device by a website, containing the
                  details of Your browsing history on that website among its
                  many uses.
                  <br />
                  Country refers to: California, United States
                  <br />
                  Device means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.
                  <br />
                  Personal Data is any information that relates to an identified
                  or identifiable individual.
                  <br />
                  Service refers to the Website.
                  <br />
                  Service Provider means any natural or legal person who
                  processes the data on behalf of the Company. It refers to
                  third-party companies or individuals employed by the Company
                  to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service or to
                  assist the Company in analyzing how the Service is used.
                  <br />
                  Usage Data refers to data collected automatically, either
                  generated by the use of the Service or from the Service
                  infrastructure itself (for example, the duration of a page
                  visit).
                  <br />
                  Website refers to Bizbolt, accessible from
                  https://www.bizbolt.com
                  <br />
                  You means the individual accessing or using the Service, or
                  the company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                  <br />
                </small>
              </Container>
              <Header
                as="h2"
                inverted
                className="privacy-subheader"
                textAlign="left"
              >
                Collecting and Using Your Personal Data
              </Header>
              <hr />
              <Header
                as="h3"
                inverted
                textAlign="left"
                className="privacy-subsubheader"
              >
                Types of Data Collected
              </Header>
              <Header
                as="h4"
                inverted
                textAlign="left"
                className="privacy-subsubsubheader"
              >
                Personal Data
              </Header>
              <Container style={{ color: "#FFFFFF" }}>
                <small className="privacy-text">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                  <br />
                  <List bulleted inverted>
                    <List.Item>Email address</List.Item>
                    <List.Item>Company Name</List.Item>
                    <List.Item>First name and last name</List.Item>
                    <List.Item>Phone number</List.Item>
                  </List>
                </small>
              </Container>
              <Header
                as="h4"
                inverted
                className="privacy-subsubsubheader"
                textAlign="left"
              >
                Usage Data
              </Header>
              <Container style={{ color: "#FFFFFF" }}>
                <small className="privacy-text">
                  Usage Data is collected automatically when using the Service.
                  <br />
                  Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                  <br />
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                  <br />
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </small>
              </Container>
              <Header
                as="h3"
                inverted
                className="privacy-subsubheader"
                textAlign="left"
              >
                Tracking Technologies and Cookies
              </Header>
              <Container style={{ color: "#FFFFFF" }}>
                <small className="privacy-text">
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                  <br />
                  Cookies or Browser Cookies. A cookie is a small file placed on
                  Your Device. You can instruct Your browser to refuse all
                  Cookies or to indicate when a Cookie is being sent. However,
                  if You do not accept Cookies, You may not be able to use some
                  parts of our Service. Unless you have adjusted Your browser
                  setting so that it will refuse Cookies, our Service may use
                  Cookies. Web Beacons. Certain sections of our Service and our
                  emails may contain small electronic files known as web beacons
                  (also referred to as clear gifs, pixel tags, and single-pixel
                  gifs) that permit the Company, for example, to count users who
                  have visited those pages or opened an email and for other
                  related website statistics (for example, recording the
                  popularity of a certain section and verifying system and
                  server integrity). Cookies can be "Persistent" or "Session"
                  Cookies. Persistent Cookies remain on Your personal computer
                  or mobile device when You go offline, while Session Cookies
                  are deleted as soon as You close Your web browser. Learn more
                  about cookies on the Free Privacy Policy website article. We
                  use both Session and Persistent Cookies for the purposes set
                  out below:
                </small>
              </Container>
              <br />
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubsubheader"
                  textAlign="left"
                >
                  Necessary / Essential Cookies
                </Header>
                <small className="privacy-text">
                  Type: Session Cookies
                  <br />
                  Administered by: Us
                  <br />
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
                </small>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubsubheader"
                  textAlign="left"
                >
                  Cookies Policy / Notice Acceptance Cookies
                </Header>
                <small className="privacy-text">
                  Type: Persistent Cookies
                  <br />
                  Administered by: Us
                  <br />
                  Purpose: These Cookies identify if users have accepted the use
                  of cookies on the Website.
                </small>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubsubheader"
                  textAlign="left"
                >
                  Functionality Cookies
                </Header>
                <small className="privacy-text">
                  Type: Persistent Cookies
                  <br />
                  Administered by: Us
                  <br />
                  Purpose: These Cookies allow us to remember choices You make
                  when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.
                  <br />
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of our Privacy Policy.
                </small>
              </Container>
              <Header
                as="h4"
                inverted
                className="privacy-subheader"
                textAlign="left"
              >
                Use of Your Personal Data
              </Header>
              <hr />
              <Container style={{ color: "#FFFFFF" }}>
                <small className="privacy-text">
                  The Company may use Personal Data for the following purposes:
                  <br />
                  To provide and maintain our Service, including to monitor the
                  usage of our Service. To manage Your Account: to manage Your
                  registration as a user of the Service. The Personal Data You
                  provide can give You access to different functionalities of
                  the Service that are available to You as a registered user.
                  For the performance of a contract: the development, compliance
                  and undertaking of the purchase contract for the products,
                  items or services You have purchased or of any other contract
                  with Us through the Service. To contact You: To contact You by
                  email, telephone calls, SMS, or other equivalent forms of
                  electronic communication, such as a mobile application's push
                  notifications regarding updates or informative communications
                  related to the functionalities, products or contracted
                  services, including the security updates, when necessary or
                  reasonable for their implementation. To provide You with news,
                  special offers and general information about other goods,
                  services and events which we offer that are similar to those
                  that you have already purchased or enquired about unless You
                  have opted not to receive such information. To manage Your
                  requests: To attend and manage Your requests to Us. For
                  business transfers: We may use Your information to evaluate or
                  conduct a merger, divestiture, restructuring, reorganization,
                  dissolution, or other sale or transfer of some or all of Our
                  assets, whether as a going concern or as part of bankruptcy,
                  liquidation, or similar proceeding, in which Personal Data
                  held by Us about our Service users is among the assets
                  transferred. For other purposes: We may use Your information
                  for other purposes, such as data analysis, identifying usage
                  trends, determining the effectiveness of our promotional
                  campaigns and to evaluate and improve our Service, products,
                  services, marketing and your experience. We may share Your
                  personal information in the following situations:
                  <br />
                  With Service Providers: We may share Your personal information
                  with Service Providers to monitor and analyze the use of our
                  Service, to contact You. For business transfers: We may share
                  or transfer Your personal information in connection with, or
                  during negotiations of, any merger, sale of Company assets,
                  financing, or acquisition of all or a portion of Our business
                  to another company. With Affiliates: We may share Your
                  information with Our affiliates, in which case we will require
                  those affiliates to honor this Privacy Policy. Affiliates
                  include Our parent company and any other subsidiaries, joint
                  venture partners or other companies that We control or that
                  are under common control with Us. With business partners: We
                  may share Your information with Our business partners to offer
                  You certain products, services or promotions. With other
                  users: when You share personal information or otherwise
                  interact in the public areas with other users, such
                  information may be viewed by all users and may be publicly
                  distributed outside. With Your consent: We may disclose Your
                  personal information for any other purpose with Your consent.
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubheader"
                  textAlign="left"
                >
                  Retention of Your Personal Data
                </Header>
                <small className="privacy-text">
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                  <br />
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubheader"
                  textAlign="left"
                >
                  Transfer of Your Personal Data
                </Header>
                <small className="privacy-text">
                  Your information, including Personal Data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ than those from Your jurisdiction.
                  <br />
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                  <br />
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubheader"
                  textAlign="left"
                >
                  Delete Your Personal Data
                </Header>
                <small className="privacy-text">
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                  <br />
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                  <br />
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any personal information that
                  You have provided to Us.
                  <br />
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubheader"
                  textAlign="left"
                >
                  Disclosure of Your Personal Data
                </Header>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubsubheader"
                  textAlign="left"
                >
                  Business Transactions
                </Header>
                <small className="privacy-text">
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                  <br />
                </small>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubsubheader"
                  textAlign="left"
                >
                  Law Enforcement
                </Header>
                <small className="privacy-text">
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                  <br />
                </small>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubsubheader"
                  textAlign="left"
                >
                  Other Legal Requirements
                </Header>
                <small className="privacy-text">
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                  <br />
                  <List bulleted inverted>
                    <List.Item>Comply with a legal obligation</List.Item>
                    <List.Item>
                      Protect and defend the rights or property of the Company
                    </List.Item>
                    <List.Item>
                      Prevent or investigate possible wrongdoing in connection
                      with the Service
                    </List.Item>
                    <List.Item>
                      Protect the personal safety of Users of the Service or the
                      public
                    </List.Item>
                    <List.Item>Protect against legal liability</List.Item>
                  </List>
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subsubheader"
                  textAlign="left"
                >
                  Security of Your Personal Data
                </Header>
                <small className="privacy-text">
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                  <br />
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subheader"
                  textAlign="left"
                >
                  Children's Privacy
                </Header>
                <hr />
                <small className="privacy-text">
                  Our Service does not address anyone under the age of 13. We do
                  not knowingly collect personally identifiable information from
                  anyone under the age of 13. If You are a parent or guardian
                  and You are aware that Your child has provided Us with Personal
                  Data, please contact Us. If We become aware that We have
                  collected Personal Data from anyone under the age of 13 without
                  verification of parental consent, We take steps to remove that
                  information from Our servers.
                  <br />
                  If We need to rely on consent as a legal basis for processing
                  Your information and Your country requires consent from a parent,
                  We may require Your parent's consent before We collect and use
                  that information.
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subheader"
                  textAlign="left"
                >
                  Links to Other Websites
                </Header>
                <hr />
                <small className="privacy-text">
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit.
                  <br />
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: "#FFFFFF" }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subheader"
                  textAlign="left"
                >
                  Changes to this Privacy Policy
                </Header>
                <hr />
                <small className="privacy-text">
                  We may update Our Privacy Policy from time to time. We will notify
                  You of any changes by posting the new Privacy Policy on this page.
                  <br />
                  We will let You know via email and/or a prominent notice on Our
                  Service, prior to the change becoming effective and update the
                  "Last updated" date at the top of this Privacy Policy.
                  <br />
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container style={{ color: '#FFFFFF' }}>
                <Header
                  as="h4"
                  inverted
                  className="privacy-subheader"
                  textAlign="left"
                >
                  Contact Us
                </Header>
                <hr />
                <small className="privacy-text">
                  If You have any questions about this Privacy Policy, You can
                  contact us: Info@bizbolt.com
                </small>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Suspense>
  );
};
