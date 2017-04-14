
# Concepts learn and struggled:

## Binding
- Use .bind(this) to bind an action for instance a form with the method called in onSubmit. 
`onSubmit={this.createTodo.bind(this)`

or adding a constructor to the components to pass the props: 
```
constructor(props) {
      super(props);
      this.createTodo = this.createTodo.bind(this);
    }
```


## Add object to an Object state
- Using `lodash` package and `_.extend`
```    
    this.setState({todos: _.extend(this.state.todos, {[
    `todo-${timestamp}`]: todo.name})
    })
```
- It can be done with arrays as well (without Lodash)
```
// this.setState({
    //   todos: this.state.todos.concat({
    //     [`todo-${timestamp}`]:todo.name
    //   })
    // })
  }
```
