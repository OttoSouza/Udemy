import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Logo from "../../assets/img/Dragonball-Goku-logo.ico";
import "../../../node_modules/font-awesome/css/font-awesome.css";
import "./navegation.style.css";

const Navegation = ({ placeholder, handleChange }) => (
  <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
    <Navbar.Brand href="#home" className="h1 m-auto navbar ">
      <img
        alt=""
        src={Logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />
      {` AnimeSkill`}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Contact</Nav.Link>
        <NavDropdown title="Social Midia">
          <NavDropdown.Item>
            {" "}
            <i className="fa fa-facebook-square text-primary"></i> FaceBook
          </NavDropdown.Item>
          <NavDropdown.Item>
            <i className="fa fa-twitter-square text-info"></i> Twitter
          </NavDropdown.Item>
          <NavDropdown.Item><i className="fa fa-instagram text-danger"></i> Instagram</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Form inline className="my-2 my-lg-0">
        <Form.Control
          className="mr-sm-2 text-center"
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </Form>
    </Navbar.Collapse>
  </Navbar>
);
export default Navegation;
