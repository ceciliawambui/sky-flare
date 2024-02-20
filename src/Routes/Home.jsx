import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image1 from './tec1.png';



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
            <h1>
              Cards
            </h1>
            <p>card 1</p>
            <p>ghjfghjg</p>
            <p>gffdfjdhrtgfd</p>
            <p>gfdthgfdg</p>
            <p>fghdtrffy</p>
            <p>fhgdddg</p>
          </div>

        </div>


      </div>
      

    </div >
  )
}

export default Home