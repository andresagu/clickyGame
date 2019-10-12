import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  // Set this.state
state = {
  friends,
  currentScore: 0,
  topScore: 0,
  result: "",
  clicked: [],
};

handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.handleReset();
  }
};

handleIncrement = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({
    currentScore: newScore,
    result: ""
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === 10) {
    this.setState({ result: "WINNER" });
  }
  this.handleShuffle();
};

handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    result: "LOSER",
    clicked: []
  });
  this.handleShuffle();
};

handleShuffle = () => {
  let shuffledFriends = shuffle(friends);
  this.setState({ friends: shuffledFriends });
};

render() {
  return (
    <Wrapper>
      <Nav
        title="Simpsons Clicky Game"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        result={this.state.result}
      />

      <Title>
        Click the characters, don't click duplicates
      </Title>

          {this.state.friends.map(friend => (

              <FriendCard
                key={friend.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={friend.id}
                image={friend.image}
              />
          ))}

    </Wrapper>
  );
}



}

export default App;
