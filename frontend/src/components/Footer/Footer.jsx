import React from "react";
import "./Footer.css";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const quick__links2 = [
  { path: "/gallery", display: "Gallery" },
  { path: "/login", display: "Login" },
  { path: "/register", display: "Register" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__links-container">
          <div className="footer__row">
            <div className="footer__link-column">
              <div className="logo">
                <img src={logo} alt="Logo" />
                <p>Explore the world with us.</p>
                <div className="social__links">
                  <span>
                    <Link to="#">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="footer__link-column">
              <h5 className="footer__link-title">Discover</h5>
              <ListGroup className="footer__quick-links">
                {quick__links.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 bo">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>

            <div className="footer__link-column">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup className="footer__quick-links">
                {quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 bo">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>

            <div className="footer__link-column">
              <h5 className="footer__link-title">Contact</h5>
              <ListGroup className="footer__quick-links">
                <ListGroupItem className="footerQuickLink">
                  <h6>
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span style={{ marginLeft: "10px" }}>Address:</span>
                  </h6>
                  <p>Turkey</p>
                </ListGroupItem>
                <ListGroupItem className="footerQuickLink">
                  <h6>
                    <span>
                      <i className="fa-solid fa-square-envelope"></i>
                    </span>
                    <span style={{ marginLeft: "10px" }}>Email:</span>
                  </h6>
                  <p>kkbra.celik92@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="footerQuickLink">
                  <h6>
                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <span style={{ marginLeft: "10px" }}>Phone:</span>
                  </h6>
                  <p>+0123456789</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
          <div className="copyright-container">
              <p className="copyright">
                Copyright {year}, design and develop by Kübra Çelik. All rights
                reserved.{" "}
              </p>
            </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
