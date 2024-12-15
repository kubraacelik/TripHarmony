import React, { useState, useContext } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext.js";
import { BASE_URL } from "./../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) alert(result.message);

      console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });

      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src="/images/login.png" alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src="/images/user.jpg" alt="" />
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
