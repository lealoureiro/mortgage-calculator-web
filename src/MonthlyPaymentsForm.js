import React, { Component, createRef} from 'react'
import axios from 'axios';
import './payments.css';

class MonthlyPaymentsForm extends Component {

  startPrincipal = createRef();
  marketValue = createRef();
  term = createRef();
  incomeTax = createRef();

  calculateMonthlyPayments = (e) => {

    const startPrincipal = this.startPrincipal.current.value;
    const marketValue = this.marketValue.current.value;
    const term = this.term.current.value;
    const incomeTax = this.incomeTax.current.value;


    axios.post(
      'http://mortgage-calculator-api.eu-west-2.elasticbeanstalk.com/monthly-payments',

    )

    const something = this.startPrincipal.current.value;

    console.log(value);

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
          <input ref={this.term} type="text"/>
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
