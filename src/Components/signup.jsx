import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
         history.push("/login")
        } catch (err){
            setError(err["message"])
        }
    
        setLoading(false)
      }

    return (
        <div >
            <Card className = "mb-3" style={{width: '30rem' , color : "#000"}}>
                <Card.Title><h1 className = "mt-4 text-center">Sign Up</h1></Card.Title>
                <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit = {handleSubmit}>

                    <Form.Group Controlid = "email">
                        
                        <Form.Label >Email </Form.Label>
                        <Form.Control type = "email" placeholder = "Enter Email Address" ref = {emailRef}></Form.Control>
                        
                    </Form.Group>

                    <Form.Group Controlid = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" placeholder = "Enter Password" ref = {passwordRef} ></Form.Control>
                   
                    </Form.Group>

                    <Form.Group Controlid = "confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type = "password" placeholder = "Enter Password Again"  ref = {passwordConfirmRef}></Form.Control>
                   
                    </Form.Group>
                
                <Button disabled={loading}  className = "mb-3 w-100" variant = "secondary" type = "submit">
                Sign Up
                </Button>
                </Form>
                <p>
                    <h5 className = "text-center">
                   Already Have an account ? <Link to = "/login">Login</Link>
                    </h5>
                    
                </p>
                </Card.Body>
            </Card>
        </div>
    )
}
