import React, {useState } from 'react'
import { Row,Col,Card, Container, Button, Form, ListGroup ,Image} from 'react-bootstrap'
import {Redirect,useHistory} from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
export default function Tracker (){
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

        const state = {
            balance:0,
            transactionHistory:[{"text":"test1","amount":"5555"},{"text":"test2","amount":"9999"}]
        }

        async function handleLogout() {
            setError("")
        
            try {
              await logout()
              history.push("/login")
            } catch {
              setError("Failed to log out")
            }
          }

        if(!currentUser)
        {
            return <Redirect to="/login" />
        }

        let display = currentUser.displayName
        if(!display) display = currentUser.email
        


        return (
            <div>
          
            <h1 className = "mb-3 mt-3 text-center">Expense Tracker</h1>
           

            <Card style={{width: '30rem' , color : "#000"}} >
                {error}
                <Card.Body>
                    <Row>
                        <Col>
                        <Image src = {currentUser.photoURL} roundedCircle fluid thumbnail />
                        </Col>
                        <Col>
                        <h3 className = "text-center">Welcome { display}</h3>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

          

        <Container fluid>

            
            <Row>
                <Col>
                <h3 className = "mb-2 mt-2 text-left">Your Balance </h3>
                </Col>
                <Col>
                <h3 className = "mb-2 mt-2 text-right">{state.balance}</h3>
                </Col>
            </Row>
            <Row>
            
            <Card className = "mb-4 mt-4 text-center" style={{width: '30rem' , color : "#000"}}>
                <Card.Title>
                <h3 className = "mb-3 mt-3 text-center">Transaction History</h3>

                </Card.Title>
                <Card.Body>
                <div>
                
                    <Row>
                    <Col> <h4 className = "ml-3 text-left"> Text</h4></Col>
                    <Col> <h4 className = "text-right"> Amount</h4></Col>
                    
                    </Row>

                    <ListGroup>

                  
                    {state.transactionHistory.map(listitem =>(
                        
                        <ListGroup.Item>
                         <Row>
                             <Col><h5 className = " text-left"> {listitem.text}</h5></Col> 
                            <Col><h5 className = " text-right"> {listitem.amount}</h5></Col> 
                         </Row>
                        </ListGroup.Item>
                    ))}
                       </ListGroup>
                </div>
                </Card.Body>
            </Card>

            </Row>

            <Row>

            

            <Card style={{width: '30rem' , color : "#000"}}>
                <Card.Title> <h3 className = "mb-3 mt-3 text-center">Add Transaction </h3></Card.Title>

                <Card.Body>
                    <Form>
                    <Form.Group id = "text">
                        <Form.Label>
                            Text
                        </Form.Label>
                        <Form.Control type = "text">
                        </Form.Control>
                        </Form.Group>

                        <Form.Group id = "amount">
                        <Form.Label>
                            Amount
                        </Form.Label>
                        <Form.Control type = "text">
                        </Form.Control>
                        </Form.Group>
                    </Form>
                    <Button className = "mb-3 w-100" variant = "secondary">
                    Add
                    </Button>
                </Card.Body>
            </Card>
            </Row>





            <Row>
            <Card className = "mb-4 mt-4 text-center" style={{width: '30rem' , color : "#000"}} >
                
                <Card.Body>
                <Button className = "w-100" variant = "secondary" onClick = {handleLogout}>
                        Logout
                    </Button>
                </Card.Body>
            </Card>
            
            </Row>          

        </Container>

        </div>
        )
    
}
