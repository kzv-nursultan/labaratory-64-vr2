import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  
  const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">My Blog</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                  <NavLink href="/add"> Add </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about"> About </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacts"> Contacts </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Labaratory-64</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;