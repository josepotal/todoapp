import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

//import AddTodo from '../AddTodo/AddTodo'
import * as TodoActions from '../../actions/TodoActions'
import Todo from '../Todo/Todo'
import TodoStore from '../../stores/TodoStore'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: TodoStore.getAll() //{}
    }

    this.createTodo = this.createTodo.bind(this);   
  }

  /*first time to DOM it renders the component
  At any change in store the state will update*/
  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    })
  }

  createTodo(event) {
    event.preventDefault()
    var todo = {
      id: Date.now(),
      name : this.refs.name.value
    }
    console.log(todo.name)
    TodoActions.createTodo(todo.name)
    this.refs.todoForm.reset();
  }

  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
    });

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <form className="task-create" ref="todoForm" onSubmit={this.createTodo}>
        <input type="text" ref="name" placeholder="Task Name"/>
        <button type="submit">+ Add Task </button>
      </form>
        {/*<AddTodo createTodo={this.createTodo} />*/}
        <ul>
          {TodoComponents}
        </ul>
      </div>
    );
  }
}

export default App;
