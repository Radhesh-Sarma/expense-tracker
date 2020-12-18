import React,{useRef} from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Login() {
    const emailRef = useRef()
const passwordRef = useRef()
    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div >
            <Card className = "mb-3" style={{width: '30rem' , color : "#000"}}>
                <Card.Title><h1 className = "mt-4 text-center">Log In</h1></Card.Title>
                <Card.Body>

                <Form onSubmit = {handleSubmit}>

                    <Form.Group id = "email">
                        
                        <Form.Label >Email </Form.Label>
                    <Form.Control type = "email" ref = {emailRef} placeholder = "Enter Email Address"></Form.Control>
                        
                    </Form.Group >

                    <Form.Group id = "password">

                        <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" ref = {passwordRef} placeholder = "Enter Password"></Form.Control>
                    
                    </Form.Group>
                
                <Button className = "mb-3 w-100" variant = "secondary" type = "Submit">
                Login
                </Button>
                </Form>
                <p>
                    <h5 className = "text-center">
                    Want to create an account ? <Link to = "/signup">Sign Up</Link>
                    </h5>
                    
                </p>
                </Card.Body>
            </Card>
        </div>
    )
}
