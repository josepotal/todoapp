import React, { Component } from 'react';
import _ from 'lodash';
//import './Todo.css';


class Todo extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    const { id, name } = this.props;
    return (
      <li>
        <p>{id}</p>
        <p>{name}</p>
      </li>
    );
  }
}

export default Todo;
