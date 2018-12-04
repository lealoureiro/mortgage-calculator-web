import React, { Component} from 'react';
import InterestTierInput from './InterestTierInput';

class InterestTiersForm extends Component {
  state = {
    interestTiers: ['tier1'],
    inputValues: [],
  }

  addNewInterestTier = e => {
    e.preventDefault();
    const { interestTiers } = this.state;

    this.setState({
      ...this.state,
      interestTiers: [...interestTiers, `tier${interestTiers.length}`]
    });
  }

  deleteLastInterestTier = e => {
    e.preventDefault();
    const { interestTiers } = this.state;
    const currentTiers = [...interestTiers];

    if (interestTiers.length > 1) {
      currentTiers.pop();

      this.setState({ ...this.state, interestTiers: currentTiers });
    }
  }

  handleChange = (interestInputValues) => {
    const { onChange } = this.props;

    onChange && onChange(interestInputValues);
  }

  render() {
    const { interestTiers } = this.state;

    return (
      <div className="interest tier form">
        <h2>Interest Tiers:</h2>

        <div id="interest-tier-list">
          {interestTiers.map((tier, index) => <InterestTierInput id={index} onChange={this.handleChange} key={`tier-input-${index}`} />)}
        </div>

        <p><button onClick={this.addNewInterestTier}>Add New Interest Tier</button></p>
        <p><button onClick={this.deleteLastInterestTier}>Delete last Interest Tier</button></p>
      </div>
    );
  }
};

export default InterestTiersForm;
