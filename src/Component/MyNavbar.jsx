import React, { Component } from 'react'
import { Container,Navbar , Nav, NavDropdown } from 'react-bootstrap'
export default class MyNavbar extends Component {
    render() {
        return (
            <div>
              <Navbar className="nav">
                <Container>
                    <Navbar.Brand href="#home"><strong><u>ShopPlus</u></strong></Navbar.Brand>
                    <Nav className="nav1">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#log-in">LogIn</Nav.Link>
                        <NavDropdown title="Grocery" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#atta">Atta</NavDropdown.Item>
                            <NavDropdown.Item href="#basmati-rice">Basmati Rice</NavDropdown.Item>
                            <NavDropdown.Item href="#olive-oil">Olive Oil</NavDropdown.Item>
                            <NavDropdown.Item href="#salt">Salt</NavDropdown.Item>
                            <NavDropdown.Item href="#milk">Milk</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#egg">Eggs</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Personal Care" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#shampoo">Shampoo</NavDropdown.Item>
                            <NavDropdown.Item href="#shower-gel">Shower Gel</NavDropdown.Item>
                            <NavDropdown.Item href="#body-oil">Body Oil</NavDropdown.Item>
                            <NavDropdown.Item href="#body-lotion">Body Lotion</NavDropdown.Item>
                            <NavDropdown.Item href="#perfumes">Perfumes</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Electronics Gadget" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#smart-tv">Smart TV</NavDropdown.Item>
                            <NavDropdown.Item href="#ac">AC</NavDropdown.Item>
                            <NavDropdown.Item href="#washing-machine">Washing Machine</NavDropdown.Item>
                            <NavDropdown.Item href="#smartphone">Smartphone</NavDropdown.Item>
                            <NavDropdown.Item href="#laptop">Laptop</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="ShopPlus Fashion" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#women">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#men">Men</NavDropdown.Item>
                            <NavDropdown.Item href="#child">Child</NavDropdown.Item>
                            <NavDropdown.Item href="#footwear">Footwear</NavDropdown.Item>
                            <NavDropdown.Item href="#accessories">Accessories</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">About Us</Nav.Link>
                    </Nav>
                </Container>
                </Navbar>  
            </div>
        )
    }
}
