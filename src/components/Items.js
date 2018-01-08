import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  }

  updateSearchTerm = value => this.setState({ value });

  render() {
    const { title, items, onRemove, onCheckOff } = this.props;

    const { value } = this.state;

    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={value} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            item.value.toLowerCase().includes(value.toLowerCase()),
          )
          .map(item => (
            <Item
              key={item.id}
              onCheckOff={() => onCheckOff(item)}
              onRemove={() => onRemove(item)}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
