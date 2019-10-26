import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useState } from "react";
import Loader from "react-loader-spinner";

import MonthlyPaymentsForm from "./components/MonthlyPaymentsForm";
import MonthlyPaymentsTable from "./components/MonthlyPaymentsTable";

import {
  MainWrapper,
  H1,
  H3,
  InnerWrapper,
  FormGroup,
  PreResults
} from "./styles";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const [monthlyPayments, setMonthlyPayments] = useState({
    payments: [],
    totalGrossInterest: 0,
    totalNetInterest: 0
  });
  const [showLoading, triggerLoading] = useState(false);
  const shouldShowResultsTable = monthlyPayments.payments.length > 0;

  const handleLoadingState = () => {
    triggerLoading(!showLoading);
  }

  return (
    <MainWrapper>
      <GlobalStyles />

      <H1>Calculate your Linear Mortgage Monthly Payments</H1>
      <H3>
        Please fill in the form on the left and press then press Calculate
      </H3>

      <InnerWrapper>
        <FormGroup>
          <MonthlyPaymentsForm onComputedResult={setMonthlyPayments} onCalculate={handleLoadingState} />
        </FormGroup>

        {shouldShowResultsTable ? (
          <MonthlyPaymentsTable monthlyPayments={monthlyPayments} />
        ) : (
          <PreResults>
            {showLoading && <Loader type="MutatingDots" color="#333" height="100" width={100} />}
          </PreResults>
        )}
      </InnerWrapper>
    </MainWrapper>
  );
};

export default App;
