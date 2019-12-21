import React from 'react';

import PaymentCell from './PaymentCell';

const suffixMapping = {
  month: '',
  repayment: '€',
  interestGrossAmount: '€',
  interestNetAmount: '€',
  interestPercentage: '%',
  principal: '€',
  totalGross: '€',
  totalNet: '€'
};

const PaymentRow = ({ index, payment }) => <tr>{Object.entries(payment).map(
  ([k, v]) => {

    const cellType = index % 2 === 0 ? "monthlyPaymentsCellBlue" : "monthlyPaymentsCell";

    return <PaymentCell key={k} cellType={cellType} value={v} suffix={suffixMapping[k]} />

  }
)}</tr>;

export default PaymentRow;
