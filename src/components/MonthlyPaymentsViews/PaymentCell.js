import React from 'react';

const PaymentCell = ({ cellType, value, suffix }) => <td className={cellType}>{value} {suffix}</td>;

export default PaymentCell;
