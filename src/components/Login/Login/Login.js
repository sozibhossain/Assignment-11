import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="login-area">
            <h2>please Login</h2>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br/>
                    <br/>
                    <Button onClick={signInUsingGoogle}>Google Sign In</Button>
                </Form>
            </div>
            
        </div>
    );
};

export default Login;