import React, { Component } from 'react';

import ExtraRepaymentsInput from './ExtraRepaymentInput';

class ExtraRepaymentsForm extends Component {

    state = {
        extraPayments: []
    }

    handleExtraRepaymentsChange = ({ id, currentValues }) => {
        const { extraPayments } = this.state;
        extraPayments[id] = { ...extraPayments[id], ...currentValues };
        this.setState({ extraPayments });

        console.log(this.state.extraPayments);
    }

    handleAddExtraRepayment = () => {

        const { extraPayments } = this.state;
    
        this.setState({
          extraPayments: [...extraPayments, { id: extraPayments.length, month: 0, amount: 0 }]
        });

    }

    handleDeleteExtraRepayment = id => {

        const { extraPayments } = this.state;
    
        if (extraPayments.length === 0) {
          console.log("There are no extra repayments to delete!");
          return;
        }
    
        extraPayments.splice(id, 1);
        this.setState({ extraPayments });

      }

    render () {

        const { extraPayments } = this.state;

        return (
            <div >

                {extraPayments.map(
                    (payment, index) => (
                        <ExtraRepaymentsInput
                            id={index}
                            month={payment.month}
                            amount={payment.amount}
                            onChange={this.handleExtraRepaymentsChange}
                            onDelete={this.handleDeleteExtraRepayment}
                            key={`repayment-input-${index}`}
                        />
                ))}

                <button style={{ width: "200px" }} type="button" onClick={this.handleAddExtraRepayment}>Add Extra Repayment</button>

            </div>
        );

    }

} 

export default ExtraRepaymentsForm;