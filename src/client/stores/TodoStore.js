/*Stores emit event when changes occur
Components listen (.on) to stores
Stores get all events(actions) from the dispatcher
Stores only react to those that care about
*/

import {EventEmitter} from "events";
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        name: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        name: "Change rent contract",
        complete: false
      },
      {
        id: 223143569,
        name: "Learn react4 and react native",
        complete: false
      },
    ];
  }

  createTodo(name) {
    const id = Date.now()
    this.todos.push ({
      id,
      name,
      complete:false,
    });

    this.emit("change")
  }

  getAll(){
    return this.todos
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