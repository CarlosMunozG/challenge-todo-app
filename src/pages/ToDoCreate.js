import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import toDoService from '../services/todoService.js'

class ToDoCreate extends Component {
  state = {
    title: '',
    body: '',
    redirect: false,
    error: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    toDoService.createToDo(this.state)
    .then( (todo) => {
      this.setState({
        redirect: true,
      })
    })
    
    .catch( error => {
      console.log(error);
      const newError = error.response.data.message;
      this.setState({
        error: newError,
      });
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, body, redirect, error } = this.state;
    return (
      <section>
        <h1>Create a todo</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='title'>title of todo</label>
          <input id='title' type='text' name='title' value={title} onChange={this.handleChange} />
          <label htmlFor='body'>Body of todo</label>
          <input id='body' type='text' name='body' value={body} onChange={this.handleChange} />
          <button type='submit'>Create todo</button>
          {error && (<p>{error}</p>)}
        </form>
        {redirect ? <Redirect to={'/'}/> : null}
      </section>
    )
  }
}

export default ToDoCreate;
