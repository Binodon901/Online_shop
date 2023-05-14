import React, { useContext,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'
import Cart from '../Cart/Cart';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import Currentcart from '../Cart/Currentcart';

const Header = () => {
  const [cart, setCart] = useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    return (

      <div className="container">
      <Navbar className="header fixed-top">
        <Navbar.Brand />
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/orderreview">
                Order Review
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            {loggedInUser.email ? (
              <React.Fragment>
                <NavItem>
                  <p className="nav-link">Email: {loggedInUser.email}</p>
                </NavItem>
                <NavItem>
                  <Button
                    variant="outline-primary"
                    onClick={() => setLoggedInUser({})}
                  >
                    Sign Out
                  </Button>
                </NavItem>
              </React.Fragment>
            ) : (
              <NavItem>
                <Link className="nav-link" to="/manageinventory">
                  Sign up/Sign in
                </Link>
              </NavItem>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    
    );
  };

export default Header;


