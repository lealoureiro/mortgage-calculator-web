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
      <div>

        <label>Interest:</label>
        <input onChange={this.handleChange} ref={this.interest} />
        <span>%</span>

        <label>Depth Percentage:</label>
        <input onChange={this.handleChange} ref={this.percentage} />
        <span>%</span>

      </div>
    );
  }

}

export default InterestTierInput;
