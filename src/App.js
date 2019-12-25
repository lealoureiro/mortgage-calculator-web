import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { Component } from "react";
import Loader from "react-loader-spinner";

import MonthlyPaymentsForm from "./components/MonthlyPaymentsForm";
import MonthlyPaymentsTable from "./components/MonthlyPaymentsTable";
import ErrorMessage from "./components/ErrorMessage";

import {
    MainWrapper,
    H1,
    H3,
    InnerWrapper,
    FormGroup,
    PreResults
} from "./styles";

import GlobalStyles from "./GlobalStyles";

class App extends Component {

    state = {
        monthlyPayments: {
            payments: [],
            totalGrossInterest: 0,
            totalNetInterest: 0
        },
        showLoading: false,
        errorMessage: null
    };

    onApiCall = () => {
        this.setState(
            {
                monthlyPayments: {
                    payments: []
                },
                showLoading: true,
                errorMessage: null
            }
        );
    }

    setMonthlyPayments = ({ monthlyPayments }) => {
        this.setState({ monthlyPayments });
    }

    handleLoadingState = ({ showLoading }) => {
        this.setState({ showLoading });
    }

    setErrorMessage = ({ errorMessage }) => {
        this.setState({ errorMessage });
    }

    showResult() {

        if (this.state.showLoading) {
            return (<PreResults><Loader type="MutatingDots" color="#333" height="100" width={100} /></PreResults>);
        } else {
            if (this.state.monthlyPayments.payments.length > 0) {
                return (<MonthlyPaymentsTable monthlyPayments={this.state.monthlyPayments} />);
            } else if (this.state.errorMessage) {
                return (<ErrorMessage message={this.state.errorMessage} />);
            }
        }

    }

    render() {
        return (
            <MainWrapper>
                <GlobalStyles />

                <H1>Calculate your Linear Mortgage Monthly Payments</H1>
                <H3>Please fill in the form on the left and press then press Calculate</H3>

                <InnerWrapper>
                    <FormGroup>
                        <MonthlyPaymentsForm
                            onComputedResult={this.setMonthlyPayments}
                            handleLoadingState={this.handleLoadingState}
                            onErrorMessage={this.setErrorMessage}
                            onApiCall={this.onApiCall}
                        />
                    </FormGroup>

                    {this.showResult()}

                </InnerWrapper>
            </MainWrapper >
        );
    }
};

export default App;
