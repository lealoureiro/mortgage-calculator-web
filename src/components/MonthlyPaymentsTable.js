import React, { Component } from "react";

import PaymentRow from "./MonthlyPaymentsViews/PaymentRow";
import PaymentsTableHeader from "./MonthlyPaymentsViews/PaymentsTableHeader";

import { TableWrapper, Table } from "./styles";

const mapColumnHeaderTitle = {
  month: "Month",
  repayment: "Repayment",
  interestGrossAmount: "Interest Gross",
  interestNetAmount: "Interest Net",
  interestPercentage: "Interest",
  principal: "Principal",
  totalGross: "Gross Payment",
  totalNet: "Net Payment"
};

class MonthlyPaymentsTable extends Component {
  render() {
    const {
      monthlyPayments: { payments }
    } = this.props;

    return payments.length > 0 && (
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              {Object.keys(payments[0]).map((key, index) => (
                    <PaymentsTableHeader
                      key={index}
                      title={mapColumnHeaderTitle[key]}
                    />
                  ))}
            </tr>
          </thead>

          <tbody>
              {payments.map(payment => (
                  <PaymentRow key={payment.month} payment={payment} />
                ))}
          </tbody>
        </Table>
      </TableWrapper>
    );
  }
}

export default MonthlyPaymentsTable;
