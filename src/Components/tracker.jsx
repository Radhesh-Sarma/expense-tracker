import React, { Component } from 'react'
import { Row,Col,Card, Container, Button, Form } from 'react-bootstrap'


export default class tracker extends Component {

    constructor(props){
        super(props)
        this.state = {
            balance:0
        }
    }

    render() {
        return (
            <div>
          
            <h1 className = "mb-5 mt-5 text-center">Expense Tracker</h1>
            <h3 className = "mb-5 mt-5 text-center">Welcome Pranjal Shukla</h3>
        <Container fluid>
            
            
            <Row>
                <Col>
                <h3 className = "mb-5 mt-5 text-left">Your Balance </h3>
                </Col>
                <Col>
                <h3 className = "mb-5 mt-5 text-right">{this.state.balance}</h3>
                </Col>
            </Row>
            <Row>
            
            </Row>
            <Row>

        

            <Card style={{width: '30rem' , color : "#000"}}>
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
        </Container>

        </div>
        )
    }
}
