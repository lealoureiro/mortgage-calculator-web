import React, { useState } from 'react';

import MonthlyPaymentsForm from './components/MonthlyPaymentsForm'
import MonthlyPaymentsTable from './components/MonthlyPaymentsTable'

import { MainWrapper, H1 } from './styles';
import GlobalStyles from './GlobalStyles';

const App = () => {
  const [monthlyPayments, setMonthlyPayments] = useState([]);

  return (
    <MainWrapper>
      <GlobalStyles />
      
      <H1>Calculate your Linear Mortgage Monthly Payments</H1>

      <MonthlyPaymentsForm onComputedResult={setMonthlyPayments} />
      <MonthlyPaymentsTable monthlyPayments={monthlyPayments} />

    </MainWrapper>
  );
}

export default App;
