import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { deleteTodo, completeTodo } from "../actions/todos";
import cn from "classnames";

export default class Todo extends PureComponent {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { id, text, isCompleted } = this.props.todo.toObject();
    const classNames = cn("todo", {
      completed: isCompleted
    });
    return (
      <li className="list-group-item">
        <span
          className={classNames}
          onClick={() => this.props.dispatch(completeTodo(id))}
        >
          {text}
        </span>
        <div
          className="close"
          onClick={() => this.props.dispatch(deleteTodo(id))}
        >
          &times;
        </div>
      </li>
    );
  }
}
