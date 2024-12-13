import React, { useRef, useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

//Header menüsünde görünecek bağlantılar
const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  
  //DOM'daki header elemanını izlemek için kullanılıyor.
  const headerRef = useRef(null);

  //Sayfa kaydırıldığında header'ın sticky bir stil almasını sağlar
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  },[]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className={`navigation ${menuActive ? "active" : ""}`}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="nav__btns">
                <button className="btn secondary_btn">
                  <Link to="/login">Login</Link>
                </button>
                <button className="btn primary_btn">
                  <Link to="/register">Register</Link>
                </button>
              </div>
            </div>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
