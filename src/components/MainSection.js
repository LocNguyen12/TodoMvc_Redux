import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };
  renderTodo = todo => (
    <li key={todo.id}>
      {todo.text} {todo.id}
    </li>
  );
  render() {
    return (
      <div>
        MainSection
        {this.props.todos.map(this.renderTodo)}
      </div>
    );
  }
}