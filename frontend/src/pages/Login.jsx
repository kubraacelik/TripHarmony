import React, { useState } from "react";
import "../styles/login.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.jpg";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup className="form__group">
                    <Input
                      className="formGroup__input"
                      type="text"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <Input
                      className="formGroup__input"
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn auth_btn" type="submit">
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account?<Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
