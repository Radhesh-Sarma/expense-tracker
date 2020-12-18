import React from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function signup() {
    return (
        <div >
            <Card className = "mb-3" style={{width: '30rem' , color : "#000"}}>
                <Card.Title><h1 className = "mt-4 text-center">Sign Up</h1></Card.Title>
                <Card.Body>

                <Form>

                    <Form.Group Controlid = "email">
                        
                        <Form.Label >Email </Form.Label>
                        <Form.Control type = "email" placeholder = "Enter Email Address"></Form.Control>
                        
                    </Form.Group>

                    <Form.Group Controlid = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" placeholder = "Enter Password"></Form.Control>
                   
                    </Form.Group>

                    <Form.Group Controlid = "confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type = "password" placeholder = "Enter Password"></Form.Control>
                   
                    </Form.Group>
                
                <Button className = "mb-3 w-100" variant = "secondary" type = "submit">
                Login
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
