import React, { Component } from 'react';
import './App.css';
import ToggleButton from './ToggleButton';

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
      <ToggleButton
        isClicked={this.state.light}
        onClick={this.onToggleButtonClick}
      />
    );
  }
}

export default App;
