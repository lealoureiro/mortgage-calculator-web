import React, { Component, createRef } from 'react';

import { StyledInterestTierInput, FieldSet, Span } from './styles';

class InterestTierInput extends Component {

  interest = createRef();
  debt = createRef();

  handleChange = () => {

    const { id, onChange } = this.props;
    const currentValues = {
      interest: this.interest.current.value,
      debt: this.debt.current.value,
    };

    onChange && onChange({ id, currentValues });
  }

  handleDelete = () => {
    const { id, onDelete } = this.props;

    onDelete && onDelete(id);
  }

  render() {
    const { interest, debt, showDeleteButton } = this.props;

    return (
      <StyledInterestTierInput>
        <FieldSet>
            <label htmlFor="interestField">Interest:</label>
            <input className="interest" value={interest} size="5" id="interestField" type="number" step="0.1" onChange={this.handleChange} ref={this.interest} />
            <Span>%</Span>
        </FieldSet>

        <FieldSet>
          <label htmlFor="debt">Debt Percentage:</label>
          <input className="debtPercentage" value={debt} id="debt" type="number" step="1" onChange={this.handleChange} ref={this.debt} />
          <Span>%</Span>
        </FieldSet>

        <div style={{width:'35px'}}>
          { showDeleteButton && <button className="delete" type="button" onClick={this.handleDelete}>X</button> }
        </div>
      </StyledInterestTierInput>
    );
  }

}

export default InterestTierInput;
