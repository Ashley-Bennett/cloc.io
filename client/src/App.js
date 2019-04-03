import React, { Component } from 'react';
import Time from './components/user/ClockInOut/Time';
import AddUser from './components/user/ClockInOut/AddUser';
import './App.css';
import RequestLeave from './components/user/RequestLeave/RequestLeave';


//Clock in and out pulling from Time.jsx
class App extends Component {
  state = {
    onDuty: false,
    timeIn: "",
    timeOut: ""
  }

   clockingHandler = async(time, onDuty) => {
    console.log(`the time is ${time}`)
    this.setState({onDuty: onDuty})
    console.log(`the onDuty is ${onDuty}`)
    if (onDuty === true) {
      await this.setState({timeIn: time})
    }
    else {
      await this.setState({timeOut: time})
    }
  };
  
  

  render() {
    return (
      <div className="App">
          <Time onDuty={this.state.onDuty} clockFunc={this.clockingHandler} ciTime={this.state.timeIn} coTime={this.state.timeOut}/>
          <AddUser/>
      </div>
    );
  }
}

export default App;
