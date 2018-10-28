import React from 'react';
import PaymentCell from './PaymentCell';


const suffixMapping = {
  month: '',
  repayment: '€',
  interestGrossAmount: '€',
  interestNetAmount:'€',
  interestPercentage:'%',
  principal: '€',
  totalGross: '€',
  totalNet: '€'
}

const PaymentRow = ({ payment }) => <tr>{Object.entries(payment).map(
  ([ k, v ]) => <PaymentCell key={k} value={v} suffix={suffixMapping[k]} />
)}</tr>;


export default PaymentRow;
