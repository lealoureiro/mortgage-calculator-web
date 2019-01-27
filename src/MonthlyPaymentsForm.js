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

  preventInputSubmit = e => {

    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
    }

  }

  render () {
    return (

      <div className="container h-100">

        <form className="col-12">

          <div className="form-group">
            <label htmlFor="initialPrincipalField">Start Principal:</label>
            <div className="input-group">
              <input className="form-control" id="initialPrincipalField" ref={this.initialPrincipal} type="number" step="500" defaultValue="200000" onKeyPress={this.preventInputSubmit}/>
              <div className="input-group-append">
                <span className="input-group-text">EUR</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="marketValueField">Market Value:</label>
            <div className="input-group">
              <input className="form-control" id="marketValueField" ref={this.marketValue} type="number" step="500" defaultValue="200000" onKeyPress={this.preventInputSubmit}/>
              <div className="input-group-append">
                <span className="input-group-text">EUR</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="termField">Term:</label>
            <div className="input-group">
              <input className="form-control" id="termField" ref={this.months} type="number" step="12" defaultValue="360" onKeyPress={this.preventInputSubmit}/>
              <div className="input-group-append">
                <span className="input-group-text">Months</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="incomeTaxField">Income Tax:</label>
            <div className="input-group">
              <input className="form-control" id="incomeTaxField" ref={this.incomeTax} type="number" step="1" defaultValue="40" onKeyPress={this.preventInputSubmit}/>
              <div className="input-group-append">
                <span className="input-group-text">%</span>
              </div>
            </div>
          </div>

          <InterestTiersForm onChange={this.handleInterestChange} />

          <button type="button" className="btn btn-success" onClick={this.calculateMonthlyPayments}>Calculate</button>

        </form>

      </div>

    );
  }
}

export default MonthlyPaymentsForm;
