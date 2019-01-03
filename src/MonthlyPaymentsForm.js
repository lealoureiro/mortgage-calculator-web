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

    e.preventDefault();

    if(!this.validateInterestTiers()) {
      console.log("Please fill the required fields!");
      return;
    }

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
      interestTiers: this.processInterestTiers()
    };

    axios.post(URL_MONTHLY_PAYMENTS, inputData, {headers})
    .then((result) => {
      onComputedResult(result.data);
    })
    .catch((error) => {
      console.warn(error)
    });

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

  }

  validateInterestTiers = () => {

    if (Object.keys(this.state.interestTiers).length === 0) {
      console.log("At least on interest tier required!");
      return false;
    }

    return true;

  }

  processInterestTiers = () => {
      return Object.values(this.state.interestTiers).map(
        e => ({interest: Number(e.interest), percentage: Number(e.percentage)})
      );
  }

  render () {
    return (
      <div className="input-form">

        <form >

          <label htmlFor="initialPrincipalField">Start Principal:</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">EUR</span>
            </div>
            <input className="form-control" id="initialPrincipalField" ref={this.initialPrincipal} aria-describedby="initialPrincipalHelp" type="number" defaultValue="200000"/>
          </div>
          <small id="initialPrincipalHelp" className="form-text text-muted">The initial amount loan from the bank.</small>


          <label>Market Value:</label>
          <input ref={this.marketValue} type="text" defaultValue="200000"/>
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
