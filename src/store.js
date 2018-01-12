import EventEmitter from 'events';
import { uniqueId } from "lodash";

import Dispatcher from "./dispatcher";

let items = [
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

class ItemStore extends EventEmitter {
  constructor(){
    super();

    Dispatcher.register(action => {
      if (action.type === "ADD_ITEM") return this.addItem(action.item);

      if (action.type === "REMOVE_ITEM") return this.removeItem(action.item);

      if (action.type === "TOGGLE_ITEM") return this.toggleItem(action.item);

      if (action.type === "UNPACK_ALL")   return this.unpackAll();
    });
  }

  getItems = () => items;

  addItem = item => {
    items = [item, ...items];
    this.emit("change");
  }

  removeItem = rmItem => {
    items = items.filter(item => item.id !== rmItem.id);
    this.emit("change");
  }

  toggleItem = tItem => {
    items = items.map(item => {
      if (item.id === tItem.id) item = tItem;
      return item;
    })
    this.emit("change");
  }

  unpackAll = () => {
    items = items.map(item => {
      return {...item, packed: false}
    });
    this.emit("change");
  }
}

export default new ItemStore();
