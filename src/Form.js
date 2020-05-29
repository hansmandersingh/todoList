import React from "react";
import Todo from "./Todo";

class Form extends React.Component {
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
        <header className="header">
          <h1>rep<span>🔥</span>irs</h1>
          <form onSubmit={this.submittionUpdate}>
            <input className="new-repair" value={this.state.inputText} placeholder="What needs to be repaired?" autoFocus="" onChange={this.changingVal} />
          </form>
        </header>
        <section className="main">
          <ul className="repair-list">
            {this.state.todos.map(todo => {
              return <Todo todoParts={todo} deleteTodo={this.deleteTodo} id={this.id}/>
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default Form;