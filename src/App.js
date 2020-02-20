import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/header/Header'

function App() {
    return (
        <Container>
        <Row>
          
          <Col auto><Header/></Col>  
        </Row> 
        <Row>
          <Col xs lg={2}>1 of 3</Col>
          <Col>2 of 3 </Col>  
        </Row>       
      </Container>
    )
}

export default App
