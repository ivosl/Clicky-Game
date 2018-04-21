import React, { Component } from 'react';
import Score from './components/Score';
import Cards from './components/Cards';
import characters from './cards.json'
import './App.css';

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
    score: 0,
    topscore: 0,
    pictures : characters
  };
}

handleImgClick = () => {
  this.setState(() => ({
    score : this.state.score + 1,
    pictures : this.shuffle(this.state.pictures)
  }
  ))
}
shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
render() {
    return (
      <div className="App">
        <Score score = {this.state.score} topscore={this.state.topscore}/>
        {this.state.pictures.map((card) => (
          <Cards key={card.id} image = {card.image} onClick={this.handleImgClick}/>
        ))
      }
      </div>
    );
  }
}

export default App;
