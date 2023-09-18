"use client";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useLocale} from "next-intl";

const Navigation = ({ locale }) => {
    return <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href={`${locale}/about`}>About us</Nav.Link>
                {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                {/*    <NavDropdown.Item href="/">Home</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="/about-us">About us</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                {/*    <NavDropdown.Divider />*/}
                {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
            </Nav>
            {/*<Nav>*/}
            {/*    <Nav.Link href="#deets">More deets</Nav.Link>*/}
            {/*    <Nav.Link eventKey={2} href="#memes">*/}
            {/*        Dank memes*/}
            {/*    </Nav.Link>*/}
            {/*</Nav>*/}
        </Navbar.Collapse>
    </Navbar>
}

export default Navigation;
