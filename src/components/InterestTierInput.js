import React, { Component, createRef } from 'react';

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

      <div className="row">

        <div className="form-group col-4">
          <div className="input-group mx-0">
            <input className="form-control" value={interest} size="5" id="interestField" type="number" step="0.1" onChange={this.handleChange} ref={this.interest} />
            <div className="input-group-append">
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>

        <div className="form-group col-4">
          <div className="input-group">
            <input className="form-control" value={debt} id="debt" type="number" step="1" onChange={this.handleChange} ref={this.debt} />
            <div className="input-group-append">
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>

        <div className="form-group col-1">
          <div className="input-group">
            { showDeleteButton && (<p><button type="button" className="btn btn-danger" onClick={this.handleDelete}>X</button></p>) }
          </div>
        </div>

      </div>
    );
  }

}

export default InterestTierInput;
