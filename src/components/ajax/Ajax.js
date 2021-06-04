import React from 'react';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Heading from "../layout/Heading"


class Ajax extends React.Component {
    
   constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      amiibo: []
    };
  }

  componentDidMount() {
    fetch("https://www.amiiboapi.com/api/amiibo/?name=mario")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            isLoaded: true,
            amiibo: result.amiibo
          });
        },
    
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, amiibo } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Wait a sec...:)</div>;
    } else {
      return (
        <Container>
          <Heading content="Ajax Mario!" />
          {amiibo.map(amiibo => (
            <Card key={amiibo.amiiboSeries}>
             <Card.Img variant="top" src={amiibo.image} alt="mario"/> 
          <Card.Body>
          <Card.Title><p>amiiboSeries:</p></Card.Title>
          <Card.Title><h4>{amiibo.amiiboSeries}</h4></Card.Title>
          <Card.Title><p>Character:</p></Card.Title>
          <Card.Title><h4>{amiibo.character}</h4></Card.Title>
          </Card.Body>
          </Card>
          ))} 
      </Container>
      );
    }
  }
}
	

export default Ajax;
