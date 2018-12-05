import React, { Component, createRef} from 'react';
import axios from 'axios';

import InterestTiersForm from './InterestTiersForm';

import './payments.css';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const URL_MONTHLY_PAYMENTS = 'http://localhost:5000/monthly-payments';

class MonthlyPaymentsForm extends Component {
  initialPrincipal = createRef();
  marketValue = createRef();
  months = createRef();
  incomeTax = createRef();

  state = {
    interestTiers: {}
  }

  calculateMonthlyPayments = (e) => {
    const initialPrincipal = parseInt(this.initialPrincipal.current.value, 10);
    const marketValue = parseInt(this.marketValue.current.value, 10);
    const months = parseInt(this.months.current.value, 10);
    const incomeTax = parseInt(this.incomeTax.current.value, 10);

    const { onComputedResult } = this.props;

    const inputData = {
      initialPrincipal,
      marketValue,
      months,
      incomeTax,
      interestTiers: [
        {
          percentage: 102,
          interest: 2.10
        },
      ]
    };

    axios.post(URL_MONTHLY_PAYMENTS, inputData, {headers})
    .then((result) => {
      onComputedResult(result.data);
    })
    .catch((error) => {
      console.warn(error)
    });

    e.preventDefault();
  }

  handleInterestChange = ({ id, currentValues }) => {
    const { interestTiers } = this.state;

    const existingInput = Object.keys(interestTiers).includes(id);

    this.setState({
      interestTiers: {
        ...interestTiers,
        [existingInput ? interestTiers.id : id]: {...currentValues}
      }
    });

    // Faz console.log do this.state aqui para veres
  }

  render () {
    return (
      <div className="input-form">

        <form >

          <label>Start Principal:</label>
          <input ref={this.initialPrincipal} type="text" defaultValue="316800"/>
          <span>EUR</span>

          <label>Market Value:</label>
          <input ref={this.marketValue} type="text" defaultValue="352000"/>
          <span>EUR</span>

          <label>Term:</label>
          <input ref={this.months} type="text" defaultValue="360"/>
          <span>Years</span>

          <label>Income Tax:</label>
          <input ref={this.incomeTax} type="text" defaultValue="40"/>
          <span>%</span>

          <InterestTiersForm onChange={this.handleInterestChange} />

          <button onClick={this.calculateMonthlyPayments}>Calculate</button>

        </form>
      </div>
    );
  }
}

export default MonthlyPaymentsForm;
