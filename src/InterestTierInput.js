import React, { Component, createRef } from 'react'


class InterestTierInput extends Component {

  interest = createRef();
  percentage = createRef();

  render() {
    return (
      <div>

        <label>Interest:</label>
        <input ref={this.interest} type="text" defaultValue="2.04"/>
        <label>%</label>

        <label>Depth Percentage:</label>
        <input ref={this.percentage} type="text" defaultValue="95"/>
        <label>%</label>

      </div>
    );
  }

}

export default InterestTierInput;
