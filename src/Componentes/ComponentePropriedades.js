
import React, { Component} from 'react'


class User extends Component{

    render(){
        return [
            <div> 

            <div>
            Nome: {this.props.nome}
            </div>
              <div>
              Foto:<img src={this.props.foto} width="10%"></img>
              </div>

              </div>
        ];
    }
}

export default User