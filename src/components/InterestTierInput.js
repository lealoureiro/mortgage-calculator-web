import React, { Component, createRef } from 'react';

import { StyledInterestTierInput, FieldSet, Span } from './styles';

class InterestTierInput extends Component {
  interest = createRef();
  debt = createRef();

  handleChange = e => {
    const { id, onChange } = this.props;
    const currentValues = {
      interest: this.interest.current.value,
      debt: this.debt.current.value,
    };

    onChange && onChange({ id, currentValues });
  }

  handleDelete = e => {
    const { id, onDelete } = this.props;

    onDelete && onDelete(id);
  }

  render() {
    const { interest, debt, showDeleteButton } = this.props;

    return (
      <StyledInterestTierInput>
        <FieldSet>
            <label htmlFor="interestField">Interest:</label>
            <input value={interest} size="5" id="interestField" type="number" step="0.1" onChange={this.handleChange} ref={this.interest} />
            <Span>%</Span>
        </FieldSet>

        <FieldSet>
          <label htmlFor="debt">Debt Percentage:</label>
          <input value={debt} id="debt" type="number" step="1" onChange={this.handleChange} ref={this.debt} />
          <Span>%</Span>
        </FieldSet>

        { showDeleteButton && <button className="delete" type="button" onClick={this.handleDelete}>Delete Tier</button> }
      </StyledInterestTierInput>
    );
  }

}

export default InterestTierInput;
