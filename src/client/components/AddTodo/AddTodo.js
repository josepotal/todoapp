import React, { Component } from 'react';
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
      name: this.refs.name.value
    }
    this.props.addTodo(todo)
    this.refs.taskForm.reset()
  }
  render() {
    return (
      <form className="task-create" ref="taskForm" onSubmit={this.createTodo}>
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