import React, { Component } from 'react';
import './App.css';
import StarRating from './StarRange';

class App extends Component {

    state = {
    starsSelected: 1,
  }

change=(starsSelected) => 
       this.setState({starsSelected});

  render() {
  	const starsSelected = this.state.starsSelected 
    return (
      <div className="App">
      <StarRating starsSelected={starsSelected} totalStars={5} onRate={this.change} />
      </div>
    );
  }
}

export default App;









 
