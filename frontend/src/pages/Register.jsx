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

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  //Kullanıcı kaydı başarılı olduğunda (REGISTER_SUCCESS), context'e bu durumu bildirmek için kullanılır
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials), //Kullanıcı bilgileri JSON formatına dönüştürülerek gönderiliyor.
      });

      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src="/images/register.jpg" alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src="/images/user.jpg" alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup className="form__group">
                    <Input
                      className="formGroup__input"
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <Input
                      className="formGroup__input"
                      type="email"
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
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account?<Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
