import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li className="">
        <div key={this.props.id} className="view">
          <input className="toggle" type="checkbox"/>
          <label>{this.props.todoParts.value}</label>
          <button className="destroy" onClick={() => {this.props.deleteTodo(this.props.todoParts)}}></button>
        </div>
      </li>
    )
  }
}

export default Todo;