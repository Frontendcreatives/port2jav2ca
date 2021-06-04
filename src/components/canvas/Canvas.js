import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import sky from "./sky.png"


class Canvas extends React.Component {
    
  componentDidMount() {
const canvas = this.refs.canvas
const contex = canvas.getContext("2d")
const img = this.refs.image


img.onload = () => {
var today = new Date();
contex.drawImage(img, 0, 0)
contex.font = "30px Verdana";
contex.strokeStyle = "#52ce90";
contex.textAlign = "center";
contex.strokeText(today, canvas.width/2, canvas.height/2);
contex.stroke();
 
var x = 0, y = canvas.height/2;
setInterval(function(){
contex.clearRect(0,0,canvas.width,canvas.height); 
contex.strokeText(today, x, canvas.height/2);
contex.stroke();    
x += 5;
if (x>contex.canvas.width) {
x = 0;
}
}, 50);
}
}
  
  render() {
    return(
         <Container>
        <Jumbotron>
        <canvas ref="canvas" width={600} height={100} />
        </Jumbotron>
        <img ref="image" src={sky} className="sky" alt="blue sky mountain range"/>
        
         </Container>
    )
  }
}


export default Canvas;
