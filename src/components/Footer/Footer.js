import React from 'react';
import { Button, Container, Form, Nav } from 'react-bootstrap';
import payment from '../../images/footer/payment.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="row footer-area">
                <Container className="row">
                    <div className="col-lg-4">
                        <h3>ATRII WORLD</h3>
                        <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna</p>
                        <p>088-01789903862</p>
                        <p>sozibhossain69@gmail.com</p>
                        <p>1718 Park Boulevard Marshalltown, IA 50158</p>
                    </div>
                    <div className="col-lg-4">
                        <h3>QUICK LINKS</h3>
                        <Nav className="footer-menu">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </div>
                    <div className="col-lg-4">
                        <h3>WEEKLY NEWSLETTER</h3>
                        <p>Want to be notified when we launch a new template or an udpate. Just sign up and we’ll send you a notification by email.</p>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
            <div className="footer-buttom">
            <p>©2021 Yatriiworld. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;