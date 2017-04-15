import React, { Component } from 'react';

import * as TodoActions from '../../actions/TodoActions'
import './AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
      super(props);

      this.createTodo = this.createTodo.bind(this);
  }
  
  createTodo(event) {
    event.preventDefault()
    var todo = {
      id: Date.now(),
      name : this.refs.name.value
    }
    TodoActions.createTodo(todo.name)
    this.refs.todoForm.reset();
  }

  render() {
    return (
      <form className="task-create" ref="todoForm" onSubmit={this.createTodo}>
        <input type="text" ref="name" placeholder="Task Name"/>
        {/*<input type="text" ref="category" placeholder="Task Category" />
        <select ref="status">
          <option value="available">Todo!</option>
          <option value="unavailable">Done!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />*/}
        <button type="submit">+ Add Task </button>
      </form>
    )
  }
}

export default AddTodo;