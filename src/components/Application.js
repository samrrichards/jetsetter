import React, { Component } from 'react';
import { uniqueId }from 'lodash';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  constructor(){
    super();

    this.state = {
      items: defaultState
    }
  }

  addItem = item => this.setState({items: [item, ...this.state.items]});

  removeItem = rmItem => {
    let newItems = this.state.items.filter(item => item.id !== rmItem.id);
    this.setState({items: newItems});
  }

  toggleItem = tItem => {
    let { items } = this.state;

    let togglededItem = items.find(item => item.id === tItem.id);

    togglededItem.packed = !togglededItem.packed;

    this.setState({ items });
  }


  unpackAll = () => {
    let { items } = this.state;

    items.forEach(item => item.packed = false);

    this.setState({ items });
  }

  // How are we going to manipualte the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  render() {
    const { items } = this.state;

    const packed = items.filter(item => !!item.packed);
    const unpacked = items.filter(item => !item.packed);

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <CountDown />
        <Items title="Unpacked Items" items={packed} onRemove={this.removeItem} onCheckOff={this.toggleItem} />
        <Items title="Packed Items" items={unpacked} onRemove={this.removeItem} onCheckOff={this.toggleItem} />
        <button onClick={this.unpackAll} className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
