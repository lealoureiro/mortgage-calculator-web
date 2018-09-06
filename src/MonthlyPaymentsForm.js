import React, { Component, createRef} from 'react'
import axios from 'axios';

import './payments.css';

class MonthlyPaymentsForm extends Component {
  startPrincipal = createRef();
  marketValue = createRef();
  months = createRef();
  incomeTax = createRef();

  calculateMonthlyPayments = (e) => {

    const startPrincipal = this.startPrincipal.current.value;
    const marketValue = this.marketValue.current.value;
    const months = this.months.current.value;
    const incomeTax = this.incomeTax.current.value;

    const result = {
      startPrincipal,
      marketValue,
      months,
      incomeTax
    }

    axios.post(
      'http://localhost:5000/monthly-payments',
      JSON.stringify(result)
    )

    e.preventDefault();
  }

  render () {
    return (
      <div className={'input-form'}>

        <form onSubmit={this.calculateMonthlyPayments}>

          <label>Start Principal:</label>
          <input ref={this.startPrincipal} type="text"/>
          <label>EUR</label>

          <label>Market Value:</label>
          <input ref={this.marketValue} type="text"/>
          <label>EUR</label>

          <label>Term:</label>
          <input ref={this.months} type="text"/>
          <label>Years</label>

          <label>Income Tax:</label>
          <input ref={this.incomeTax} type="text"/>
          <label>%</label>

          <button>Calculate</button>

        </form>
      </div>
    );
  }

}

export default MonthlyPaymentsForm
