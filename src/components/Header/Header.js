import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';

const Header = () => {
    
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    return (

        <div className="container">
            
            <div className='row col-md-12'>
                
        <Navbar className="header">
          <Navbar.Brand>
          </Navbar.Brand>
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
        </Navbar>
      </div>
      </div>
    );
  };

export default Header;


