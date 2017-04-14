import React, { Component } from 'react';
import _ from 'lodash';
//import './Todo.css';


class Todo extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { id, mame } = this.props;
    console.log(this.props)
    return (
      <li>
        <p>{id}</p>
        <span>{name}</span>
      </li>
    );
  }
}

export default Todo;
