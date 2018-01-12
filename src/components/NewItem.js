import React, { Component } from 'react';

import { addItem } from "../actions";

import './NewItem.css';

class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({value: event.target.value})
  };

  handleSubmit = event => {
    const { value } = this.state;

    event.preventDefault();

    addItem(value);

    this.setState({value:''});
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
