import React, { Component, createRef } from 'react';

import { StyledExtraRepaymentInput, FieldSet, Span } from './styles';

class ExtraRepaymentInput extends Component {

    month = createRef();
    amount = createRef();

    handleChange = () => {

        const { id, onChange } = this.props;
        const currentValues = {
            month: this.month.current.value,
            amount: this.amount.current.value,
        };

        onChange && onChange({ id, currentValues });

    }

    handleDelete = () => {

        const { id, onDelete } = this.props;
        onDelete && onDelete(id);

    }

    render() {

        const { month, amount } = this.props;

        return (

            <StyledExtraRepaymentInput>

                <FieldSet>
                    <label htmlFor="monthField">Month:</label>
                    <input className="month" value={month} size="4" id="monthField" type="number" step="1" onChange={this.handleChange} ref={this.month} />
                </FieldSet>

                <FieldSet>
                    <label htmlFor="amountFiled">Amount:</label>
                    <input className="amount" value={amount} id="amount" type="number" step="1" onChange={this.handleChange} ref={this.amount} />
                    <Span>€</Span>
                </FieldSet>

                {<button className="delete" type="button" onClick={this.handleDelete}>X</button>}

            </StyledExtraRepaymentInput>

        );
    }

}

export default ExtraRepaymentInput;