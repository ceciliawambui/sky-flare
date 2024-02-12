import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';




function Home() {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <Row>
            <Col lg='7'>
              <div className="justify-content-end align-items-center">
                <h3><strong>Sky Flare Technology Solutions and Office Supplies</strong></h3>
                <br />
                <p>To empower businesses through technology innovation and enhance workplace efficiency by providing top-notch office supplies, fostering growth and success.</p>
              </div>
            </Col>
            <Col lg='2'>
              <img src="./it3.jpeg" alt="photo" />
            </Col>

          </Row>

        </div>

      </div>
    </div>
  )
}

export default Home