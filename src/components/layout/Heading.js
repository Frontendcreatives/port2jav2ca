import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

function Heading({content}) {
    
    
    return (
        
        <Jumbotron fluid>
        <h1>{content}</h1>
        </Jumbotron>
)}

export default Heading;