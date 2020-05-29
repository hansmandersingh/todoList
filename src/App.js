import React from 'react';
import './App.css';
import Form from './RepairList.js';

class App extends React.Component {

  state = {
    inputText: "",
    todos: [],
  }

  id = 0;

  changingVal = (e) => {
    this.setState({inputText: e.target.value})
  }

  createTodo = (val) => {
    this.setState(currentState => ({
      todos: [...currentState.todos, {value: val, id: this.id++}]
    })
    )
  }

  submittionUpdate = (e) => {
    e.preventDefault();

    this.createTodo(this.state.inputText);

    this.setState({inputText: ""});
  }

  deleteTodo = (val) => {
    this.setState(currentState => ({
      todos: currentState.todos.filter(todo => todo !== val),
    }))
  }

  render() {
    return (
      <>
        <section className="fixmeapp">
          <Form />
        </section>   
      </>
    )
  }
}

export default App;
