import React, { Component } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import cards from "./components/cards.json"



class App extends Component {
  state={
    cards,
    score: 0,
    high: 0
  };


  click = id => {
    
  }




  render(){
    return (
      <Wrapper>
        <Header score={this.state.score} high={this.state.high} />;
          {this.state.cards.map(card =>(
            <Card clicks={this.clicks} id={card.id} key={card.id} image={card.image} />
          ))}
      </Wrapper>
    );
  }  
}

export default App;
