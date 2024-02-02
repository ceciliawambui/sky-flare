import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';



function Contact() {
    return (
        <Container>
            <Row className='mb-5 mt-3'>
                <Col lg-8>
                    <h1 className='display-4 mb-4'>
                        Contact Me
                    </h1>
                </Col>
            </Row>
            <Row className='sec_sp'>
                <Col lg='6' className="mb-5">
                    <h3 className='color_sec py-4'>Get in touch</h3>
                    <address>
                        <strong>Email: email@gmail.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>Phone: +254712345678</strong>
                        </p>
                    </address>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

                </Col>
                <Col lg='6' className='d-flex align-items-center'>
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
                    <Form className='justify-content-end'>
                        <Col>
                        <Form.Group className="mb-8" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        </Col>

                      
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact