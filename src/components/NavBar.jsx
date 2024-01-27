import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';



const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { user } = useAuth0();
  const { logout } = useAuth0();

  const handleLogOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }
  return (
    <>
      <Navbar
        bg="custom"
        data-bs-theme="dark"
        style={{
          backgroundColor: "#38419D",
          marginBottom: "50px",
          color: "black",
          height: "65px",
          display:"flex",
          justifyContent:"space-between",
          flexWrap:"wrap",
          alignItems:"center"
        }}
      >
      <>
      <div className="lines-div" onClick={handleShow} >
        <div className="line-1 lines"></div>
        <div className="line-2 lines"></div>
        <div className="line-3 lines"></div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Implementation of search filter....
        </Offcanvas.Body>
      </Offcanvas>
    </>
        <Container>
          <Navbar.Brand href="#home" style={{ color: "#fff" }}>  
            <b>noteSync</b>
          </Navbar.Brand>
          
          <button
            onClick={handleLogOut}
            className="logoutButton"
            style={{
              background: "none",
              color: "white",
              fontSize: "20px",
              height: "30px",
              width: "80px",
              fontFamily: "initial",
              fontWeight: "100",
              border: "none"
            }}
          >
            Log Out
          </button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
