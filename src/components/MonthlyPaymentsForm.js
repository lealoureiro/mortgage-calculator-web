import React, { Component, createRef } from 'react';

import { calculate } from '../api';

import InterestTiersForm from './InterestTiersForm';

class MonthlyPaymentsForm extends Component {
  initialPrincipal = createRef();
  marketValue = createRef();
  months = createRef();
  incomeTax = createRef();

  state = {
    interestTiers: [
      { id: 0, interest: 2.50, debt: 101 }
    ]
  }

  handleAddTier = () => {
    const { interestTiers } = this.state;

    this.setState({
      interestTiers: [...interestTiers, { id: interestTiers.length, interest: 0, debt: 0 }]
    });
  }

  handleDeleteTier = id => {
    const { interestTiers } = this.state;

    if (interestTiers.length === 1) {
      console.log("Cannot delete last interest tier!");
      return;
    }

    interestTiers.splice(id, 1);
    this.setState({ interestTiers });
  }

  calculateMonthlyPayments = async (e) => {
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

    const result = await calculate(inputData, onComputedResult);

    console.log('====================================');
    console.log(result);
    console.log('====================================');
  }

  handleInterestChange = ({ id, currentValues }) => {
    const { interestTiers } = this.state;
    interestTiers[id] = { ...interestTiers[id], ...currentValues };
    this.setState({ interestTiers });
  }

  validateInterestTiers = () => {
    const { interestTiers } = this.state;

    if (interestTiers.length === 0) {
      console.log("At least one interest tier required!");
      return false;
    }

    return true;
  }

  processInterestTiers = () => {
    return this.state.interestTiers.map(
      e => ({interest: Number(e.interest), percentage: Number(e.debt)})
    );
  }

  preventInputSubmit = e => {
    if (e.keyCode === 13 || e.which === 13) {
      return false;
    }
  }

  render () {
    const { interestTiers } = this.state;

    return (
      <form>
          <div className="row">

            <div className="col-6">

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
            </div>
        </div>

          <InterestTiersForm
            onChange={this.handleInterestChange}
            onDeleteTier={this.handleDeleteTier}
            onAddTier={this.handleAddTier}
            interestTiers={interestTiers}
          />

          <button type="button" onClick={this.calculateMonthlyPayments}>Calculate</button>
        </form>
    );
  }
}

export default MonthlyPaymentsForm;
