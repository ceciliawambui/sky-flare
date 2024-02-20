import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image1 from './tec1.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



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
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg='3'>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg='3'>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg='3'>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </div>
          <br />
          <br />
          <div>
            <h1 className="center">Our Clients</h1>
            <p>section 1</p>
            <p>section 1</p>
            <p>section 1</p>
            <p>section 1</p>
            <p>section 1</p>
            <p>section 1</p>

          </div>


        </div>


      </div>


    </div >
  )
}

export default Home