import React, { Component } from 'react';
import './App.css';
import ToggleButton from './ToggleButton';
import Light from './Light';

class App extends Component {

  constructor() {
    super();

    this.state = {
      light: false,
    };

    this.onToggleButtonClick = this.onToggleButtonClick.bind(this);
  }

  onToggleButtonClick() {
    this.setState({
      light: !this.state.light,
    })
  }

  render() {
    return (
      <div>
        <ToggleButton
          isClicked={this.state.light}
          onClick={this.onToggleButtonClick}
        />
        <Light isLight={this.state.light} />
      </div>
    );
  }
}

export default App;
