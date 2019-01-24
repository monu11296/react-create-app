import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: ''
    };

    this.nameChange = this.nameChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
  }

  nameChange =(e) =>{
    this.setState({name: e.target.value});
  }
  phoneChange =(e) =>{
    this.setState({phone: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <p>Hello World!</p><br />
        <p>Enter Your Name</p>
        <input type="text" onChange={this.nameChange}></input><br /><br /><br /><br />
        <input type="tel" onChange={this.phoneChange}></input>
        <br />
        <p>Your Name: {this.state.name}</p>
        <p>Your Phone: {this.state.phone}</p>
      </div>
    );
  }
}

export default App;
