import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function Container() {
    return (
        <Container>
        <Row>
          <Col xs lg={2}>1 of 3</Col>
          <Col>2 of 3 </Col>  
        </Row>      
      </Container>
    )
}

export default Container
