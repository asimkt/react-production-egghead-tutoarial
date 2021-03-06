import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TodoForm, TodoList, Footer} from './components/todo';

import {addTodo, removeTodo, generateId, findById, toggleTodo, updateTodos, filterTodos} from './lib/todoHelpers'
import {partial, pipe} from './lib/utils'

import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService'

class App extends Component {

  static contextTypes = {
    route: React.PropTypes.string
  }

  state = {
    todos: [],
    currentTodo: ''
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    })
    destroyTodo(id).then( () =>
      this.showTempMessage('Todo Destroyed'))
  }

  handleToggle = (id) => {
    const getToggledTodo = pipe(findById, toggleTodo);
    const updated = getToggledTodo(id, this.state.todos);
    const getUpdatedTodos = partial(updateTodos, this.state.todos);
    const updatedTodos = getUpdatedTodos(updated);
    this.setState({
      todos: updatedTodos
    })
    saveTodo(updated).then(
      () => this.showTempMessage('Todo updated'))
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  componentDidMount = () => {
    loadTodos().then(todos => this.setState({todos}))
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

    createTodo(newTodo).then(()=>{
      this.showTempMessage('Todo added');
    });
  }

  showTempMessage = (msg) => {
    this.setState({
      message: msg
    })
    setTimeout(() => this.setState({message: ''}), 1000);
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
    const displayTodos = filterTodos(this.state.todos, this.context.route)
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
          {this.state.message && <p className="success"> {this.state.message} </p>}
          <TodoList handleRemove={this.handleRemove}
            handleToggle={this.handleToggle}
            todos={displayTodos}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
