import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory ,Redirect} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { GoogleLoginButton,FacebookLoginButton } from "react-social-login-buttons";

export default function Login() {
  const {login, loginWithGoogle,loginWithFacebook } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch (err) {
      setError("Failed to log in\n");
    }

    setLoading(false);
  }

  async function handleGoogleLogin(e) {
    try {
      setError("");
      setLoading(true);
      await loginWithGoogle();
      history.push("/dashboard");
    } catch (err) {
      setError("Failed to log in");
    }

    setLoading(false);
  }
  async function handleFacebookLogin(e) {
    try {
      setError("");
      setLoading(true);
      await loginWithFacebook();
      history.push("/dashboard");
    } catch (err) {
      setError("Failed to log in" + err["message"]);
    }

    setLoading(false);
  }

  return (
    <div>
      <Card className="mb-3" style={{ width: "30rem", color: "#000" }}>
        <Card.Title>
          <h1 className="mt-4 text-center">Log In</h1>
        </Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter Email Address"
              ></Form.Control>
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Enter Password"
              ></Form.Control>
            </Form.Group>

            <Button
              size="lg"
              disabled={loading}
              className="mb-3 w-100"
              variant="secondary"
              type="Submit"
            >
              Login
            </Button>
          </Form>

          <GoogleLoginButton
            disabled={loading}
            type="Submit"
            onClick={handleGoogleLogin}
          />


          <p>
            <h5 className="mt-4 text-center">
              Want to create an account ? <Link to="/signup">Sign Up</Link>
            </h5>
          </p>
          <p>
            <h5 className="mt-4 text-center">
              <Link to="/forgotPassword">Forgot Password ? </Link>
            </h5>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}
