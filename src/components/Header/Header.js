import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div>
                <Navbar className="header-area" collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">ATRii-WORLD</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
                            <Nav>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                <NavDropdown title="Users" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/users">Users</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/addUser">Add User</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/addService">AddService</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageServices">ManageServices</NavDropdown.Item>
                                </NavDropdown>
                                {user?.email ?
                                    <Button onClick={logOut} className="logout-button">Logout</Button>:
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }
                            </Nav>
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            
        </div>
    );
};

export default Header;