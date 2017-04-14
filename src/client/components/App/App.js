import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [] //{}
    }

    this.addTodo = this.addTodo.bind(this);
    
  }

  addTodo(todo) {
    console.log(todo)
    console.log(this.state)
    //var timestamp = (new Date()).getTime();
    
    // //Using objects
    // this.setState({
    //   todos: _.extend(this.state.todos, {[`todo-${timestamp}`]: todo.name})
    // })
    //Using arrays
    this.setState({
      todos: this.state.todos.concat(todo)
    })
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
        <AddTodo addTodo={this.addTodo} />

        <ul>
          {TodoComponents}
        </ul>
      </div>
    );
  }
}

export default App;
