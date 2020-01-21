import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import moment from 'moment';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
              <h1>Moment.js Example</h1>
              <p>Current Date: {moment().format(' Do MMMM YYYY, h:mm:ss a')} </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
