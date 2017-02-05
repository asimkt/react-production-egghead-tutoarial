import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TodoForm, TodoList} from './components/todo';

import {addTodo, generateId} from './components/lib/todoHelpers'

class App extends Component {

  state = {
    todos: [
     { id: 1, name: 'Learn JSX', isComplete: true},
     { id: 2, name: 'Build App', isComplete: false},
     { id: 3, name: 'Deploy!!', isComplete: false}
    ],
    currentTodo: ''
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newId = generateId()
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    }

    const updatedTodos = addTodo(this.state.todos, newTodo)

    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleErrorSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please suppply a todo'
    })
  }

  render() {
    const handleSubmit = this.state.currentTodo ?
      this.handleSubmit : this.handleErrorSubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={handleSubmit}/>
          {this.state.errorMessage && <p className="error"> {this.state.errorMessage} </p>}
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
