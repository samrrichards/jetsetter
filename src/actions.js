import { uniqueId } from 'lodash';
import Dispatcher from './dispatcher';

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const TOGGLE_ITEM = "TOGGLE_ITEM";
const UNPACK_ALL = "UNPACK_ALL";

export const addItem = value => {
  const item = {
    value,
    id: uniqueId("item_"),
    packed: false
  };

  Dispatcher.dispatch({
    type: ADD_ITEM,
    item
  });
};

export const removeItem = item => {
  Dispatcher.dispatch({
    type: REMOVE_ITEM,
    item
  });
};

export const toggleItem = item => {
  Dispatcher.dispatch({
    type: TOGGLE_ITEM,
    item: {...item, packed: !item.packed}
  });
};

export const unpackAll = () => {
  console.log("unpackAll called");
  Dispatcher.dispatch({ type: UNPACK_ALL });
};
