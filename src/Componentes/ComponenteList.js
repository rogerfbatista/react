
import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'reactstrap';

class ListComponente extends Component {


    render() {

        let list = [
            {
                nome: 'Rogerio',
                email: 'rogerfbatista@gmail.com'
            },
            {
                nome: 'Enzo Gabriel',
                email: 'EnzoGabriel@gmail.com'
            }
        ]
        return [
            <Container>
                <Row>
                    <Col>
                        <div>
                            Eu sou uma Lista
                            <Table responsive dark striped bordered>
                                <thead >
                                    <tr>
                                        <th>
                                            Nome
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                    </tr>

                                </thead>
                                <tbody>
                                {list.map((d, i) =>

                                    <tr>
                                        <td>
                                            {d.nome}
                                        </td>
                                        <td>
                                            {d.email}
                                        </td>
                                    </tr>


                                )}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>

        ];
    }
}

export default ListComponente