import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image1 from './tec1.png';
import image2 from './im1.jpeg';
// import image3 from './im2.jpeg';
import image4 from './im3.jpeg';
import image5 from './im4.jpeg';
import image6 from './im5.jpeg';



import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import '@fortawesome/fontawesome-free/css/all.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof, faComputer, faTruck, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import Marquee from "react-fast-marquee";





function Home() {
  return (
    <div>
      <div className="container">

        <div className="wrapper">

          {/* <div className="background2"> */}
          <Row>
            <Col lg='6'>
              <div className="justify-content-end align-items-center" id="intro">
                <h2 id="title"><strong><span>Sky Flare </span>Technology Solutions & Office Supplies</strong></h2>
                <br />
                <p>To empower businesses through technology innovation and enhance workplace efficiency by providing top-notch office supplies, fostering growth and success.</p>
                <Button variant="info" id="b1" href="/contact">Contact Us </Button>{' '}

                <Button variant="light" id="b2" href="/services">Learn More</Button>{' '}

              </div>
            </Col>
            <Col lg='6'>
              <img src={image1} />
            </Col>
          </Row>
        </div>
        <div>
          <div >
            <h1 className="center">Our Mission</h1>
            <Row>
              <Col lg='3'></Col>
              <Col lg='6'>
                <p className="center">To empower businesses through technology innovation and enhance workplace efficiency by providing top-notch office supplies, fostering growth and success.</p>
              </Col>
              <Col lg='3'></Col>
            </Row>

          </div>
          <div>
            <br />
            <Row>
              <Col lg='3'>
                <Card>

                  <FontAwesomeIcon icon={faPeopleRoof} size="2x" />
                  <Card.Body>
                    <Card.Title><strong>Continuous Support</strong></Card.Title>
                    <Card.Text>
                      We are dedicated to continuously improving our customer service standards. Through feedback mechanisms and regular evaluations, we identify areas for enhancement and implement measures to elevate the overall customer experience.                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg='3'>
                <Card>
                  <FontAwesomeIcon icon={faComputer} size="2x" />                  <Card.Body>
                    <Card.Title><strong>Prompt Responsiveness</strong></Card.Title>
                    <Card.Text>
                      Our team is committed to providing prompt responses to customer inquiries, whether they relate to IT solutions or office supplies. We prioritize communication and ensure that our clients receive timely assistance whenever they reach out to us.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg='3'>
                <Card>
                  <FontAwesomeIcon icon={faTruck} size="2x" />                  <Card.Body>
                    <Card.Title><strong>Flexible Delivery Options</strong></Card.Title>
                    <Card.Text>
                      We offer flexible delivery options to accommodate our clients' preferences and requirements. Whether it's same-day delivery for urgent orders or scheduled deliveries for larger shipments, we strive to meet our clients' timelines effectively.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg='3'>
                <Card>
                  <FontAwesomeIcon icon={faCloudArrowUp} size="2x" />                  <Card.Body>
                    <Card.Title><strong>Seamless Integration</strong></Card.Title>
                    <Card.Text>
                      For clients seeking both IT solutions and office supplies, we offer seamless integration to streamline their procurement processes. By consolidating their purchases with us, clients benefit from greater convenience, cost savings, and efficiency.                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

          </div>
          <br />
          <br />
          <div>
            <h1 className="center">Clients</h1>
            <Row>
              <Marquee>
               <img src={image2}  alt="" />
               <br />
          
               <img src={image4}  alt="" />
               <br />
               <img src={image5}  alt="" />
               <br />
               <img src={image6}  alt="" />
               <br />
              


              </Marquee>

            </Row>
            <br />
            <br />
            <h1 className="center">Clients Testimonials</h1>




          </div>


        </div>


      </div>


    </div >
  )
}

export default Home