import React, { useState } from "react";

import MonthlyPaymentsForm from "./components/MonthlyPaymentsForm";
import InterestTiersForm from "./components/InterestTiersForm";
import MonthlyPaymentsTable from "./components/MonthlyPaymentsTable";

import { MainWrapper, H1, InnerWrapper, FormGroup } from "./styles";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const [monthlyPayments, setMonthlyPayments] = useState([]);
  const shouldShowResultsTable = true; //monthlyPayments.length > 0;

  return (
    <MainWrapper>
      <GlobalStyles />

      <H1>Calculate your Linear Mortgage Monthly Payments</H1>

      <InnerWrapper>
        <FormGroup>
          <MonthlyPaymentsForm onComputedResult={setMonthlyPayments} />
          <InterestTiersForm />
        </FormGroup>

        {shouldShowResultsTable ? (
          <MonthlyPaymentsTable monthlyPayments={monthlyPayments} />
        ) : null}
      </InnerWrapper>
    </MainWrapper>
  );
};

export default App;
