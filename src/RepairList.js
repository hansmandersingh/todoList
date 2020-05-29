import React from "react";
import Todo from "./repair";

class Form extends React.Component {
  id = 0;

  state = {
    inputText: "",
    todos: [],
  }

  componentDidMount = () => {
    fetch('https://5ed0108416017c00165e327c.mockapi.io/api/v1/repairs')
      .then(data => data.json())
      .then(json => {
        let newArray = [];

        json.forEach(repair => {
          newArray.push({value: repair.task , id: repair.id, checked: ""})
        });

        this.setState({todos: newArray})
      })
  }

  checkRepair = (e) => {
    this.setState(prevState => {
      let existingTodoIndex = prevState.todos.findIndex(element => element === e);
      let clonedTodo = {...prevState.todos[existingTodoIndex]}
      
      if (clonedTodo.checked === "completed") {
        clonedTodo.checked = "";
      } else if (clonedTodo.checked !== "completed"){
        clonedTodo.checked = "completed";
      }
      
      let newState = [...prevState.todos];

      newState.splice(existingTodoIndex, 1, clonedTodo);

      return {todos: newState}
    })
  }

  changingVal = (e) => {
    this.setState({inputText: e.target.value})
  }

  createTodo = (val) => {
    this.setState(currentState => ({
      todos: [...currentState.todos, {value: val, id: this.id++, checked: ""}]
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
              return <Todo key={todo.id} todoParts={todo} deleteTodo={this.deleteTodo} id={this.id} checkRepair={this.checkRepair}/>
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default Form;