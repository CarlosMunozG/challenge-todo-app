import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import toDoService from '../services/todoService.js';

class Home extends Component {
  state = {
    todos: [],
  }

  componentDidMount(){
    toDoService.getToDos()
    .then((response) => {
      const newTodos = response.data;
      this.setState({
        todos: newTodos,
      })
    })
    .catch(error => { console.log(error) })
  }

  handleDeletePlaceClick = id => {
    const newTodos = this.state.todos.pop(id);
    toDoService.deleteToDo(id)
    .then(() => {
      this.setState({
        todos: newTodos,
      })
    })
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>todo list</h1>
        <section>
          {todos.length >0 ? todos.map(todo => {
            return(
              <article key={todo._id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <Link to={`/update-todo/${todo._id}`}>Update todo</Link>
                <button onClick={() => {this.handleDeletePlaceClick(todo._id)}}>Delete</button>
              </article>
            )
          }): <p>you don't have any todo in your list</p>}
        </section>
      </div>
    )
  }
}

export default Home;