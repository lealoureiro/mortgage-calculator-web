import React, { Component } from 'react';

import PaymentRow from './MonthlyPaymentsViews/PaymentRow';
import PaymentsTableHeader from './MonthlyPaymentsViews/PaymentsTableHeader';

import { Table } from './styles';

const mapColumnHeaderTitle = {
  month: 'Month',
  repayment: 'Repayment',
  interestGrossAmount: 'Interest Gross',
  interestNetAmount: 'Interest Net',
  interestPercentage: 'Interest',
  principal: 'Principal',
  totalGross: 'Gross Payment',
  totalNet: 'Net Payment'
};

class MonthlyPaymentsTable extends Component {
  render () {
    const { monthlyPayments: { payments } } = this.props;

    return (
      <Table>
        <thead>
          <tr>{ payments && payments.length ? Object.keys(payments[0]).map((key, index) => <PaymentsTableHeader key={index} title={mapColumnHeaderTitle[key]} />) : null }</tr>
        </thead>

        <tbody>
          { payments && payments.length ? payments.map(payment=> <PaymentRow key={payment.month} payment={payment} />) : null }
        </tbody>
      </Table>
    )
  }
}

export default MonthlyPaymentsTable;
