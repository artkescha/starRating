import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRatingNoState from './StarRange_no_state';

class App extends Component {
    constructor(props) {
        super()
        this.state = { starsSelected: 0 }
        this.change = this.change.bind(this)
    }
    change(starsSelected) {
        this.setState({ starsSelected: starsSelected })
    }
    

  render() {
    return (
      <div className="App">
      <StarRatingNoState starsSelected={this.state.starsSelected} totalStars={5} onRate={this.change} />
      </div>
    );
  }
}

export default App;









 
