import React from 'react'; 
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../sass/styles.scss";
import { BrowserRouter as Router, Switch, Route, NavLink } 
from "react-router-dom";
import Container from "react-bootstrap/Container";
import Cardinput from "../cards/Cardinput";
import Ajax from "../ajax/Ajax";
import Vanilla from "../vanilla/Vanilla";
import Promise from "../promise/Promise";
import Typescript from "../typescript/Typescript";
import Canvas from "../canvas/Canvas";


function Layout() {
    
    
     
    
    return (
        
        
<Router>
    
   <Navbar  bg="transparent" variant="light" expand="md" className="ml-auto">
        <Navbar.Brand >JAVASCRIPT 2 CA </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                    <Nav className="ml-auto">
                        
      
        <NavLink to="/cards" exact  className="nav-link" >Advanced DOM CARDS</NavLink>
        <NavLink to="/ajax"  className="nav-link" >AJAX</NavLink>
        <NavLink to="/promise"  className="nav-link" >PROMISE</NavLink>
        <NavLink to="/vanilla"  className="nav-link" >VANILLA</NavLink>
        <NavLink to="/canvas"  className="nav-link" >CANVAS</NavLink>
        <NavLink to="/typescript"  className="nav-link" >TYPESCRIPT</NavLink>

                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        
        <Container>
                <Switch>
                    <Route path="/cards" exact component={Cardinput} />
                    <Route path="/ajax" exact component={Ajax} /> 
                    <Route path="/promise" exact component={Promise} />
                    <Route path="/vanilla" exact component={Vanilla} /> 
                    <Route path="/canvas" exact component={Canvas} />
                    <Route path="/typescript" exact component={Typescript} /> 
                </Switch>
        </Container>     
</Router>

    );
}

export default Layout;

