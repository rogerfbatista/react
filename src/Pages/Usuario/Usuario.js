  
import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'reactstrap';
import ListComponente from '../../Componentes/ComponenteList';

class Usuario extends Component {


    render() {

        return [
            <Container>
                <Row>
                    <Col>                    
       <ListComponente></ListComponente>
                    </Col>
                </Row>
            </Container>

        ];
    }
}

export default Usuario