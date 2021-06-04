import React , {Component} from 'react';
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading"

class Vanilla extends Component {

constructor(props) {
    super(props)
   this.state = {
      data: [],
      
    }; 
    
  }
  componentDidMount() {
    this.getData()
  }
    
  getData() {
   
    var dataMario = new XMLHttpRequest();

    dataMario.addEventListener('load', () => {
        
      const data = JSON.parse(dataMario.responseText); 
      console.log(data)
        
        this.setState({
        data: data.amiibo,
      });
    })
   
    dataMario.open("GET","https://www.amiiboapi.com/api/amiibo/?name=mario" );
   
    dataMario.send();
    
  }
    

  render() {
      const {data} = this.state;
    return (
    
      <Container>
        
        <Heading content="Vanilla Mario!" />
        
        
         {data.map(d => (
         <div key={d.amiiboSeries}>
          <img src={d.image} alt="mario"></img>
          <h4>{d.character} in {d.amiiboSeries}</h4>
         </div>
          ))}
        
      </Container>
    )
  }
}  
    

export default Vanilla;

