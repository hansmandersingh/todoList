import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li className={this.props.todoParts.checked}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={() => {this.props.checkRepair(this.props.todoParts)}}/>
          <label >{this.props.todoParts.value}</label>
          <button className="destroy" onClick={() => {this.props.deleteTodo(this.props.todoParts)}}></button>
        </div>
      </li>
    )
  }
}

export default Todo;