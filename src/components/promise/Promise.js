import React from "react";
import {Button} from "react-bootstrap"
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading"


class Promise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amiibo: [],
   
      
    };
  }

  handleButtonClick = () => {
    const fetchMario = async () => {
      const res = await fetch("https://www.amiiboapi.com/api/amiibo/?name=mario");
      const { amiibo } = await res.json();
      console.log(amiibo);
       
      this.setState({
        amiibo: amiibo
       
      });
    };
    fetchMario();
  };

  render() {
      const {amiibo} = this.state;
    return (
      <Container>
        <Heading content="Promise Mario!" />
      {amiibo.map(d => (
         <div key={d.amiiboSeries}>
          <img src={d.image} alt="mario"></img>
          <h4>{d.character} in {d.amiiboSeries}</h4>
         
         </div>
    ))}

   <Button onClick={this.handleButtonClick} className="btn">FETCH MARIOs</Button>
      </Container>
  )}
}

export default Promise;
