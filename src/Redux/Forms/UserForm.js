import React from 'react';
import {reduxForm} from "redux-form"
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const userFormFunc = props => {
    return [
        <div> 
        <h1>Eu sou Redux</h1>
        <Form>
            <label>
                Nome:
            <input
                    type="text"
                    name="nome"
                    component="input"
                >
                </input>
            </label>
        </Form>
        </div>
    ]
}

const userForm= (reduxForm({
    form:"formUser"

}))(userFormFunc)

const mapStateToPro = state=>({

})
export default connect(mapStateToPro)(userForm)