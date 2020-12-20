import React, {useState,useRef,useEffect} from 'react';
import {Row, Col, Card, Container, Button, Form, ListGroup, Image,Alert} from 'react-bootstrap';
import {Link ,Redirect, useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import firebase from 'firebase'

export default function Tracker() {
  const [error, setError] = useState('');
  const {currentUser, logout} = useAuth();
  const history = useHistory();
  const [balance, setBalance] = useState(0);
  
    const transactionTextRef = useRef();
    const transactionAmountRef = useRef();
    
    const db = firebase.firestore();
    
    const docRef = db.collection('transactionHistory').doc('sXzQx4keqMF3UH0rMLpO');
    const [transactionHistory, setTransactionHistory] = useState([]);

 async function handleAddTransaction(e) {

    e.preventDefault();
    if(transactionAmountRef.current.value)setBalance(balance + parseInt(transactionAmountRef.current.value))
    else 
    {
      setError('Enter Amount')
      return
    } 

    const transaction = {userid:currentUser.uid,text:transactionTextRef.current.value,amount:transactionAmountRef.current.value};
    await setTransactionHistory(transactionHistory.concat(transaction))

    await docRef.set({transactionHistory}).then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  
  setError(null);

  }
  useEffect(() => {

    const fetchData = async() => {

        try {

            const response = await docRef.get();

           console.log('response', response);

            let data = { title: 'not found' };

            if (response.exists) {
                data = response.data();
                console.log(data["transactionHistory"])
                setTransactionHistory(data["transactionHistory"])
            }
            
            let bal = 0;

            Object.values(data["transactionHistory"]).filter(element => element.userid === currentUser.uid).map((listitem) =>(
              bal = bal + parseInt(listitem.amount)
              ))
              setBalance(bal)

            // setCurrentPost(data);
            // setLoading(false);

        } catch(err) {
            console.error(err);
        }

    };

    fetchData();

}, []);


  async function handleLogout(e) {
    e.preventDefault();
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  let display = currentUser.displayName;
  if (!display) display = currentUser.email;

  function handleUpdateProfile(e)
  {
    e.preventDefault();
    history.push('/updateProfile')
  }
  return (
    <div>

      <h1 className = "mb-3 mt-3 text-center">Expense Tracker</h1>


      <Card style={{width: '30rem', color: '#000'}} >
        
        <Card.Body>

          <Row>
            <Col>
              <Image src = {currentUser.photoURL} roundedCircle fluid thumbnail />

            </Col>
            <Col>
              <h3 className = "text-center">Welcome { display}</h3>
              
            </Col>
             
          </Row>
          <Row>
          <Button className = "ml-2 mb-3 w-500" variant = "secondary" onClick = {handleUpdateProfile}> Update Profile</Button>
            {!currentUser.emailVerified && <Button className = "ml-2 mb-3 w-500" variant = "secondary" onClick = {currentUser.sendEmailVerification()}>Verify Email</Button> }
            </Row>
        </Card.Body>
      </Card>

      <Container fluid>
        <Row>
          <Col>
            <h3 className = "mb-2 mt-2 text-left">Your Expenses</h3>
          </Col>
          <Col>
            <h3 className = "mb-2 mt-2 text-right">{balance}</h3>
          </Col>
        </Row>
        <Row>
          <Card className = "mb-4 mt-4 text-center" style={{width: '30rem', color: '#000'}}>
            <Card.Title>
              {balance > 0 && <h3 className = "mb-3 mt-3 text-center">Transaction History</h3>}
              {balance === 0 && <h3 className = "mb-3 mt-3 text-center">No Transactions Yet</h3>}
            </Card.Title>
            <Card.Body>
              <div>
                
                    {balance !== 0 && <p>
                        <Row>  
                        <Col> <h4 className = "ml-3 text-left"> Text</h4></Col>
                  <Col> <h4 className = "text-right"> Amount</h4></Col>
                        </Row>   
                        </p>}



              

                <ListGroup>
                  {Object.values(transactionHistory).filter(element => element.userid === currentUser.uid).map((listitem) =>(
                      <div>
                   <ListGroup.Item>
                      <Row>
                        <Col><h5 className = " text-left"> {listitem.text}</h5></Col>
                        <Col><h5 className = " text-right"> {listitem.amount}</h5></Col>
                      </Row>
                    </ListGroup.Item>
                      </div>

                  ))

                  }
                </ListGroup>
              </div>
            </Card.Body>
          </Card>

        </Row>

        <Row>


          <Card style={{width: '30rem', color: '#000'}}>
            <Card.Title> <h3 className = "mb-3 mt-3 text-center">Add Transaction </h3></Card.Title>
               {error &&  < Alert variant = "danger">{error}</ Alert>}
            <Card.Body>
              <Form onSubmit = {handleAddTransaction}>
                <Form.Group id = "text">
                  <Form.Label>
                            Text
                  </Form.Label>
                  <Form.Control type = "text" ref = {transactionTextRef}>
                  </Form.Control>
                </Form.Group>
                <Form.Group id = "amount">
                  <Form.Label>
                            Amount
                  </Form.Label>
                  <Form.Control type = "number" ref = {transactionAmountRef}>
                  </Form.Control>
                </Form.Group>
                <Button className = "mb-3 w-100" variant = "secondary" type = "Submit">
                    Add
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card className = "mb-4 mt-4 text-center" style={{width: '30rem', color: '#000'}} >
            <Card.Body>
              <Button className = "w-100" variant = "secondary" onClick = {handleLogout}>
                    Logout
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
