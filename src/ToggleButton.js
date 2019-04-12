import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleButton extends Component {
  static propsTypes = {
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler (event) {
    this.props.onClick();
  }

  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.isClicked}
        onChange={this.onClickHandler}
      />
    );
  }
}

export default ToggleButton;
