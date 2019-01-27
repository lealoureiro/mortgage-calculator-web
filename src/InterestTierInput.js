import React, { Component, createRef } from 'react';

class InterestTierInput extends Component {

  interest = createRef();
  percentage = createRef();

  handleChange = e => {
    const { onChange, id } = this.props;
    const currentValues = {
      interest: this.interest.current.value,
      percentage: this.percentage.current.value,
    };

    onChange && onChange({ id, currentValues });
  }

  render() {
    return (

      <div className="interestTier">

        <div className="form-group row">
          <div className="col-sm-5 input-group interest-field">
            <input className="form-control" size="5" id="interestField" type="number" step="0.1" defaultValue="2.50" onChange={this.handleChange} ref={this.interest} />
            <div className="input-group-append">
              <span className="input-group-text">Interest (%)</span>
            </div>
          </div>

          <div className="col-sm-6 input-group">
            <input className="form-control" id="debtPercentage" type="number" step="1" defaultValue="101" onChange={this.handleChange} ref={this.percentage} />
            <div className="input-group-append">
              <span className="input-group-text">Debt Percentage (%)</span>
            </div>
          </div>


        </div>

      </div>
    );
  }

}

export default InterestTierInput;
