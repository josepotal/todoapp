import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

//Firebase
import firebase from 'firebase';


import AddTodo from '../AddTodo/AddTodo'
//import * as TodoActions from '../../actions/TodoActions'
import Todo from '../Todo/Todo'
import TodoStore from '../../stores/TodoStore'

class App extends Component {
  constructor(props) {
    super(props)
    this.getTodos = this.getTodos.bind(this)
    this.state = {
      user: null,
      todos: TodoStore.getAll() //{}
    }
  }

  // handleAuth() {
  //   const provider = new firebase.auth.GoogleAuthProvider()
  //   firebase.auth().signInWithPopup(provider)
  //     .then(result => console.log(`${result.user.email} started session`))
  //     .catch(error => console.log(`Error: ${error.code}: ${error.message}`))
  // }

  /*first time to DOM it renders the component
  At any change in store the state will update*/
  componentWillMount() {
    TodoStore.on("change", this.getTodos)
  }
  /*Avoid memory leaks when changing routes, unbind listener*/
  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos)
  }

  getTodos(){
    this.setState({
      todos: TodoStore.getAll()
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
          {/*<button onClick={this.handleAuth}>Log in with Google</button>*/}
        </div>
        
        <AddTodo createTodo={this.createTodo} />
        <ul>
          {TodoComponents}
        </ul>
      </div>
    );
  }
}

export default App;
