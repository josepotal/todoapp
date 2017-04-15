/*Stores emit event when changes occur
Components listen (.on) to stores
Stores get all events(actions) from the dispatcher
Stores only react to those that care about
*/

import {EventEmitter} from "events";
import dispatcher from '../dispatcher';
import firebase from 'firebase';

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  
  this.getAll = this.getAll.bind(this)
  }

    componentWillMount(){
      this.setState({
        todos : this.todos.getAll()
      })
    }

  createTodo(name) {
    const id = Date.now()
    const dbRef = firebase.database().ref().child('todos');
    const newTodo = dbRef.push()
    newTodo.set({
      id,
      name,
      complete:false,
    });

    this.emit("change")
  }

  getAll(){
    const rootRef = firebase.database().ref()
    const dbRef = rootRef.child('todos')
    dbRef.on('value', snap => {
      this.state.todos = snap.val()
      return this.state.todos
    })
      console.log(this.state.todos)
      return this.state.todos
  }

  //only respond to the actions type we care about
  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.name)
      }
      
    }
  }

}

const todoStore = new TodoStore;
//register the store as a listener
dispatcher.register(todoStore.handleActions.bind(todoStore))

// check from browser console if it works
window.todoStore = todoStore
window.dispatcher = dispatcher

export default todoStore;