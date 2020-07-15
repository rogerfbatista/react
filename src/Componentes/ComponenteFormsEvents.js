
import React, { Component } from 'react'
import { Container, Row, Col, Label } from 'reactstrap';

class RogerioForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nomecompleto: 'Enzo',
            email: 'rogerfbatista@gmai.com'
        }

        this.AlterarState = this.AlterarState.bind(this);
        this.AlterarCampos = this.AlterarCampos.bind(this);
    }

    AlterarState() {

        this.setState({
            nomecompleto: "Enzo Gabriel"
        })

    }

    AlterarCampos(event) {
        let target = event.target;
        let index = target.name;
        this.setState({
            [index]: target.value
        });
    }


    render() {
        return [
            <Container>
                <Row>
                    <Col>
                        <form>
                            <Label>
                                Nome:<input
                                    type="text" name="nomecompleto"
                                    value={this.state.nomecompleto}
                                    onChange={this.AlterarCampos}></input>
                            </Label>
                            <label>
                                Email: <input type="text" name="email" value={this.state.email}
                                onChange={this.AlterarCampos}></input>
                            </label>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            Eu sou um form
                             <div>
                                Nome: {this.state.nomecompleto}
                            </div>
                            <div>
                                Email: {this.state.email}
                            </div>
                            <button onClick={this.AlterarState}>Click Aqui</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        ];
    }
}

export default RogerioForm