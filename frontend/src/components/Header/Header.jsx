import React, { useRef, useState, useEffect, useContext } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "./../../context/AuthContext";

// Header menüsünde görünecek bağlantılar
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
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  // Sayfa kaydırıldığında header'ın sticky bir stil almasını sağlar
  const stickyHeaderFunc = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFunc);
    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  // Menü açma/kapama fonksiyonu
  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState); // Menü durumunu tersine çevir
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className={`navigation ${menuActive ? "show__menu" : ""}`} ref={menuRef}>
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
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <button className="btn logout_btn" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn secondary_btn">
                      <Link to="/login">Login</Link>
                    </button>
                    <button className="btn primary_btn">
                      <Link to="/register">Register</Link>
                    </button>
                  </>
                )}
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
