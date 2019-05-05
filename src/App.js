import React from 'react';
import './App.css';
import ExampleForm from './ExampleForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          React Tenancy
      </header>
        <article>
          <ExampleForm />
        </article>
      </div>
    )
  }
}

export default App;
