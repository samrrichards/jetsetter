import React, { Component } from 'react';

import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import ItemStore from "../store";
import { unpackAll } from "../actions";

import './Application.css';

class Application extends Component {
  constructor(){
    super();

    this.state = {
      items: ItemStore.getItems()
    }
  }

  componentDidMount = () => ItemStore.on("change", this.updateState);

  updateState = () => this.setState({items: ItemStore.getItems()});

  render() {
    const { items } = this.state;

    const packed = items.filter(item => !!item.packed);
    const unpacked = items.filter(item => !item.packed);

    const testUnpack = () => {
      console.log(unpackAll);
      unpackAll();
    }

    return (
      <div className="Application">
        <NewItem />
        <CountDown />
        <Items title="Unpacked Items" items={packed} />
        <Items title="Packed Items" items={unpacked} />
        <button onClick={testUnpack} className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
