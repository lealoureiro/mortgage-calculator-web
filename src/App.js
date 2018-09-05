import React, { Component } from 'react';
import Banner from './Banner'
import MonthlyPaymentsForm from './MonthlyPaymentsForm'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Banner/>
        <MonthlyPaymentsForm/>
      </div>
    );
  }
}

export default App;
