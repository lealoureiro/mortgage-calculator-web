import React, { Component, createRef, Fragment } from 'react';

import { FieldSet } from './styles';

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
      <Fragment>
        <FieldSet>
            <label htmlFor="interestField">Interest:</label>
            <input value={interest} size="5" id="interestField" type="number" step="0.1" onChange={this.handleChange} ref={this.interest} />
            <span>%</span>
        </FieldSet>

        <FieldSet>
          <label htmlFor="debt">Debt Percentage:</label>
          <input value={debt} id="debt" type="number" step="1" onChange={this.handleChange} ref={this.debt} />
          <span>%</span>
        </FieldSet>

        { showDeleteButton && <button type="button" onClick={this.handleDelete}>X</button> }
      </Fragment>
    );
  }

}

export default InterestTierInput;
