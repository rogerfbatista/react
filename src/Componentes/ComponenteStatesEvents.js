
import React, { Component} from 'react'

class RogerioEventos extends Component{

    constructor(props){
        super(props)
        this.state = {
            nomecompleto:'Enzo'
        }

     this.AlterarState = this.AlterarState.bind(this);
    }
       
    AlterarState() {    

       this.setState({
        nomecompleto : "Enzo Gabriel"
       })

      
   }


    render(){
        return [
            <div> 
            <div>
             Eu Sou um Evento: {this.state.nomecompleto}
            </div>   
            <button onClick={this.AlterarState}>Click Aqui</button>         
              </div>
        ];
    }
}

export default RogerioEventos