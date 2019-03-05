import { List, Map } from "immutable";
import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

function todoList(state = List(), action) {
  switch (action.type) {
    case types.ADD_TODO:
      return state.push(
        Map({
          id: action.id,
          text: action.text,
          isCompleted: false
        })
      );

    case types.COMPLETE_TODO:
      return state.map(todo => {
        if (todo.get("id") === action.id) {
          return todo.update("isCompleted", v => !v);
        }
        return todo;
      });

    case types.DELETE_TODO:
      return state.filter(todo => todo.get("id") !== action.id);

    case types.DELETE_ALL_TODOS:
      return state.clear();

    default:
      return state;
  }
}

function activeFilter(state = "all", action) {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default combineReducers({
  activeFilter,
  todoList
});
