import React, { Component, createRef} from 'react'
import axios from 'axios';

import './payments.css';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

class MonthlyPaymentsForm extends Component {

  initialPrincipal = createRef();
  marketValue = createRef();
  months = createRef();
  incomeTax = createRef();

  calculateMonthlyPayments = (e) => {

    const initialPrincipal = parseInt(this.initialPrincipal.current.value);
    const marketValue = parseInt(this.marketValue.current.value);
    const months = parseInt(this.months.current.value);
    const incomeTax = parseInt(this.incomeTax.current.value);

    const { onSubmit } = this.props;

    const inputData = {
      initialPrincipal,
      marketValue,
      months,
      incomeTax,
      "interestTiers": [
        {
          "percentage": 102,
          "interest": 2.10
        }
      ]
    }

    axios.post(
      'http://localhost:5000/monthly-payments',
      inputData,
      {headers}
    ).then((result) => {
      onSubmit(result.data);
    })
    .catch((error) => {
      console.log(error.response.errorMessage)
    })

    e.preventDefault();
  }

  render () {
    return (
      <div className={'input-form'}>

        <form onSubmit={this.calculateMonthlyPayments}>

          <label>Start Principal:</label>
          <input ref={this.initialPrincipal} type="text" defaultValue="316800"/>
          <label>EUR</label>

          <label>Market Value:</label>
          <input ref={this.marketValue} type="text" defaultValue="352000"/>
          <label>EUR</label>

          <label>Term:</label>
          <input ref={this.months} type="text" defaultValue="360"/>
          <label>Years</label>

          <label>Income Tax:</label>
          <input ref={this.incomeTax} type="text" defaultValue="40"/>
          <label>%</label>

          <button>Calculate</button>

        </form>


      </div>
    );
  }

}

export default MonthlyPaymentsForm
