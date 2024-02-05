import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';



function Contact() {
    return (
        <Container>
            <Row className='mb-4 mt-3'>
                <Col lg-8>
                    <h1 className='display-4 mb-3'>
                        Contact Us
                    </h1>
                </Col>
            </Row>
            <br />
            <Row className='sec_sp'>
                <Col lg='5' className="mb-5">
                    <h3 className='color_sec py-4'>Get in touch</h3>
                    <address>
                        <strong>Email: email@gmail.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>Phone: +254712345678</strong>
                        </p>
                    </address>
                    <p>We are a dynamic and innovative company specializing in providing comprehensive IT solutions and a wide range of office supplies.
                    </p>

                </Col>
                <Col lg='7'>
                    {/* <form className='contact__form w-100'>
                        <Row>
                            <Col lg="6" className='form-group'>
                                <input
                                    className='form-control rounded-0' id="name" name="name" placeholder="Name" type="text" />
                            </Col>
                            <Col lg="6" className='form-group'>
                                <input
                                    className='form-control rounded-0' id="email" name="email" placeholder="Email" type="email" />
                            </Col>
                        </Row>
                        <textarea className='form-control rounded-0' name="message" id="message" placeholder="Message" cols="30" rows="5"></textarea>

                    </form> */}
                    <Form>
                        <Row>
                        <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        </Col>

                        </Row>
                       <Row>
                       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                       </Row>
                       <Row>
                        <Col lg="12" className='form-group'>
                            <Button className='btn ac_btn' variant="light" type="submit">
                                Send
                            </Button>
                        </Col>
                       </Row>
                     

                      
                    
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact