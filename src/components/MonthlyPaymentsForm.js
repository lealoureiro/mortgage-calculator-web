import React, { Component, createRef } from 'react';

import InterestTiersForm from "./InterestTiersForm";
import ExtraRepaymentsForm from './ExtraRepaymentsForm';


import { calculate } from '../api';

import { Form, FieldSet, Span } from './styles';

class MonthlyPaymentsForm extends Component {

    initialPrincipal = createRef();
    marketValue = createRef();
    months = createRef();
    incomeTax = createRef();

    state = {
        interestTiers: [
            { id: 0, interest: 2.50, debt: 101 }
        ],
        extraRepayments: []
    }

    calculateMonthlyPayments = (e) => {

        e.preventDefault();

        if (!this.validateInterestTiers()) {
            console.log("Please fill the required fields!");
            return;
        }

        const initialPrincipal = parseInt(this.initialPrincipal.current.value, 10);
        const marketValue = parseInt(this.marketValue.current.value, 10);
        const months = parseInt(this.months.current.value, 10);
        const incomeTax = parseInt(this.incomeTax.current.value, 10);

        const { onComputedResult, onLoadingFinish, onErrorMessage, onApiCall } = this.props;

        const inputData = {
            initialPrincipal,
            marketValue,
            months,
            incomeTax,
            interestTiers: this.processInterestTiers(),
            repayments: this.processExtraRepayments()
        };

        onApiCall();

        calculate(inputData, onComputedResult, onErrorMessage, onLoadingFinish);

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
            e => ({ interest: Number(e.interest), percentage: Number(e.debt) })
        );
    }

    processExtraRepayments = () => {
        return this.state.extraRepayments.map(
            e => ({ month: Number(e.month), amount: Number(e.amount) })
        );
    }

    preventInputSubmit = e => {
        if (e.keyCode === 13 || e.which === 13) {
            return false;
        }
    }

    handleInterestTierChange = ({ interestTiers }) => {
        this.setState({ interestTiers });
    }

    handleExtraRepaymentsChange = ({ extraRepayments }) => {
        this.setState({ extraRepayments });
    }

    render() {
        return (
            <Form>
                <FieldSet>
                    <label htmlFor="initialPrincipalField">Start Principal:</label>
                    <input id="initialPrincipalField" ref={this.initialPrincipal} type="number" step="500" defaultValue="200000" onKeyPress={this.preventInputSubmit} />
                    <Span>EUR</Span>
                </FieldSet>

                <FieldSet>
                    <label htmlFor="marketValueField">Market Value:</label>
                    <input id="marketValueField" ref={this.marketValue} type="number" step="500" defaultValue="200000" onKeyPress={this.preventInputSubmit} />
                    <Span>EUR</Span>
                </FieldSet>

                <FieldSet>
                    <label htmlFor="termField">Term:</label>
                    <input id="termField" ref={this.months} type="number" step="12" defaultValue="360" onKeyPress={this.preventInputSubmit} />
                    <Span>Months</Span>
                </FieldSet>

                <FieldSet>
                    <label htmlFor="incomeTaxField">Income Tax:</label>
                    <input id="incomeTaxField" ref={this.incomeTax} type="number" step="1" defaultValue="40" onKeyPress={this.preventInputSubmit} />
                    <Span>%</Span>
                </FieldSet>

                <InterestTiersForm onChange={this.handleInterestTierChange} />
                <ExtraRepaymentsForm onChange={this.handleExtraRepaymentsChange} />

                <button className="calculate" type="button" onClick={this.calculateMonthlyPayments}>Calculate</button>

            </Form>
        );
    }
}

export default MonthlyPaymentsForm;
