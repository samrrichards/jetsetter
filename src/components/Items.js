import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = { value: ''};

  updateSearchTerm = searchTerm => this.setState({value: searchTerm});

  render() {
    const { title, items, onRemove, onCheck } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={this.state.value} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            item.value.toLowerCase().includes(this.state.value.toLowerCase()),
          )
          .map(item => (
            <Item
              key={item.id}
              onCheckOff={() => onCheck(item)}
              onRemove={() => onRemove(item)}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
