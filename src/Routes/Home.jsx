import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image1 from './it.jpeg';



function Home() {
  return (
    <div>
      <div className="container">

        <div className="wrapper">
          <br />
          <br />
       

          {/* <div className="background2"> */}
          <Row>
            <Col lg='6'>
              <div className="justify-content-end align-items-center" id="intro">
                <h3><strong><span>Sky Flare </span>Technology Solutions and Office Supplies</strong></h3>
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
        <Row>

        </Row>


      </div>
    </div >
  )
}

export default Home