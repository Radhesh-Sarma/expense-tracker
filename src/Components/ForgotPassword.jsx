import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword} = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }


  return (
    <div>
      <Card className="mb-3" style={{ width: "30rem", color: "#000" }}>
        <Card.Body>
          <h1 className="text-center mb-4">Password Reset</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label><h4>Email</h4></Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button
            size="lg"
             variant = "secondary" disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <h5 className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </h5>

    <h5 className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </h5>
      
        </Card.Body>
      </Card>

    </div>
  )
}