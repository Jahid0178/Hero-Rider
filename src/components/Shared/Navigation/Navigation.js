import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Hero Rider
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className="nav-link text-white" to="/admin-panel">
              Admin Panel
            </NavLink>
            {user.email ? (
              <Button className="nav-link text-white" onClick={logOut}>
                LogOut
              </Button>
            ) : (
              <>
                <NavDropdown title="SignUp" id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/rider-signup"
                    href="#action/3.1"
                  >
                    Rider
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/driving-lesson-learner"
                    href="#action/3.2"
                  >
                    Driving Lesson Learner
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink className="nav-link text-white" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
