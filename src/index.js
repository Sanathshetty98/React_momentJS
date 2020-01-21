import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import moment from 'moment';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      time: moment().format(' Do MMMM YYYY, h:mm:ss a')
    };
  }
  componentDidMount(){
    setInterval(this.changeTime,1000);
  }

  changeTime = () => {
    //if(this.state.time !== undefined || this.state.time !== null){
      let {time} = this.state
      time =  moment().format(' Do MMMM YYYY, h:mm:ss a')
      this.setState({time})
  }
  render() {
    return (
      <div className="container">
              <h1>Moment.js Example</h1>
              <p>Current Date: {this.state.time} </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

/* If we do not use arrow functions while declaring then we need to bind the function to this */