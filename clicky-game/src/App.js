import React, { Component } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import cards from "./components/cards.json"

let score = 0;
let high = 0;

class App extends Component {
  state={
    cards,
    score: 0,
    high: 0
  };


  setClicked = id => {

    const cards = this.state.cards;
    const clickedCard = cards.filter(card => card.id === id);

    if (clickedCard[0].clicked){
      score = 0;
      alert("You already clicked that card.  Game Over.");
      for (let i = 0; cards.length; i++){
        cards[i].clicked = false;
      }
      this.setState({score});
      this.setState({cards});
    } else if (score < 11){
      clickedCard[0].clicked = true;
      score++;
      if (score>high){
        high = score;
        this.setState({high});
      }
      cards.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({cards});
      this.setState({score})
    } else{
      clickedCard[0].clicked = true;
      score = 0;
      alert("Perfecto!");
      high = 12;
      this.setState({high});
      for (let i=0; cards.length; i++){
        cards[i].clicked = false;
      }
      cards.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({cards});
      this.setState({score});
    }
  }




  render(){
    return (
      <Wrapper>
        <Header score={this.state.score} high={this.state.high} />
          {this.state.cards.map(card =>(
            <Card setClicked={this.setClicked} id={card.id} key={card.id} image={card.image} />
          ))}
      </Wrapper>
    );
  }  
}

export default App;
