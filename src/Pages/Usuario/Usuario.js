  
import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'reactstrap';
import ListComponente from '../../Componentes/ComponenteList';
import UserForm from '../../Redux/Forms/UserForm';

class Usuario extends Component {


    render() {

        return [
            <Container>
                <Row>
                    <Col>   
                    <UserForm></UserForm>                 
       <ListComponente></ListComponente>
                    </Col>
                </Row>
            </Container>

        ];
    }
}

export default Usuario