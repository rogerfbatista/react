import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rogerio from './Componentes/ComponenteRogerio';
import User from './Componentes/ComponentePropriedades';
import Photo from "./Imagem/Rogerio.jpg"
import RogerioEvento from './Componentes/ComponenteStatesEvents';
import RogerioForm from './Componentes/ComponenteFormsEvents';
import { Container, Row, Col } from 'reactstrap';
import { Link,Route } from 'react-router-dom';
import routesConfig from './routesConfig';

function App() {
  
  return (
  
    <div className="App">
      <Container>    
        <Row> 
        <Link to="/">Home</Link>
        </Row>
        <Row> 
      <Link to="/Usuario">Usuario</Link>
      </Row>
      </Container>

      {routesConfig.map((value,k)=>
            <Route
            key={k}
            path={value.path}
            component ={value.component}
            exact = {value.exact}
            >
            </Route>
      )}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >       
           Learn React
         
        </a>
       <Container>   
         <Row>    
          <Col xs="6">
               <Rogerio></Rogerio>
              <User  nome="Rogerio"></User>
        </Col>       
        <Col xs="6">
        <User foto={Photo}></User>
       <RogerioEvento ></RogerioEvento>
       </Col>
       </Row> 
       </Container>
  
      </header>
      <body>
        <Container>     
          <Row>                
             <Col sm="12" md={{ size: 5, offset: 5 }}> 
            <RogerioForm></RogerioForm>
            </Col>
            </Row>
        </Container>
 
      </body>
    </div>
  );
}

export default App;
