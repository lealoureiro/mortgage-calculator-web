import React, { Component } from 'react';

import ExtraRepaymentsInput from './ExtraRepaymentInput';

class ExtraRepaymentsForm extends Component {

    state = {
        extraRepayments: []
    }

    handleExtraRepaymentsChange = ({ id, currentValues }) => {

        const { extraRepayments } = this.state;
        extraRepayments[id] = { ...extraRepayments[id], ...currentValues };

        this.setState({ extraRepayments });

        const { onChange } = this.props;
        onChange && onChange({ extraRepayments });

    }

    handleAddExtraRepayment = () => {

        const { extraRepayments } = this.state;
        const updatedExtraRepayments = [...extraRepayments, { id: extraRepayments.length, month: 0, amount: 0 }];

        this.setState({ extraRepayments: updatedExtraRepayments });
        this.updateMainState({ extraRepayments: updatedExtraRepayments });

    }

    handleDeleteExtraRepayment = id => {

        const { extraRepayments } = this.state;

        if (extraRepayments.length === 0) {
            return;
        }

        extraRepayments.splice(id, 1);
        this.setState({ extraRepayments });

    }

    updateMainState = ({ extraRepayments }) => {
        const { onChange } = this.props;
        onChange && onChange({ extraRepayments });
    }

    render() {

        const { extraRepayments } = this.state;

        return (
            <div >

                {extraRepayments.map(
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