import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

// Change bin state by calling getBinsState every 1500 seconds
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

// Change visibility of trash inside bin:
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onTrashClicked = () => {
    let updatedPoints = this.state.points;
    updatedPoints = updatedPoints + 1;

    this.setState( {
      points: updatedPoints
    });
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        //  Invoke Trash componet and pass only key as prop containing index
        <Trash onTrashClicked={this.onTrashClicked} key={`trash-${index}`} trashStatus={bin.isTrashVisible}/>
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
