import React, { Component ,UseRef} from 'react'
import { Row,Col,Card, Container, Button, Form } from 'react-bootstrap'


export default class tracker extends Component {

 
    constructor(props){
        super(props)
        this.state = {
            balance:0,
            transactionHistory:[{"text":"test1","amount":"5555"},{"text":"test2","amount":"9999"}]
        }
        function handleSubmit(e)
        {
            e.preventDefault()
        }
    }
    

    render() {
        return (
            <div>
          
            <h1 className = "mb-3 mt-3 text-center">Expense Tracker</h1>
            <h3 className = "mb-3 mt-3 text-center">Welcome Pranjal Shukla</h3>
        <Container fluid>
            
            
            <Row>
                <Col>
                <h3 className = "mb-3 mt-3 text-left">Your Balance </h3>
                </Col>
                <Col>
                <h3 className = "mb-3 mt-3 text-right">{this.state.balance}</h3>
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
                    <Col> <h4 className = "text-left"> Text</h4></Col>
                    <Col> <h4 className = "text-right"> Amount</h4></Col>
                    
                    </Row>

                    {this.state.transactionHistory.map(listitem =>(
                      <Row>
                         <Col><h5 className = "ml-1 mt-3 text-left"> {listitem.text}</h5></Col> 
                         <Col><h5 className = "ml-1 mt-3 text-right"> {listitem.amount}</h5></Col> 
                    </Row>
                    ))}
                     
                </div>
                </Card.Body>
            </Card>

            </Row>

            <Row>

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
        </Container>

        </div>
        )
    }
}
