import React from 'react';
import './App.css';
import Form from './RepairList.js';

class App extends React.Component {

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
