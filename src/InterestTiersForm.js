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
      <div className="interestTiersForm">
        <h5>Interest Tiers:</h5>

        <div id="interest-tier-list">
          {interestTiers.map((tier, index) => <InterestTierInput id={index} onChange={this.handleChange} key={`tier-input-${index}`} />)}
        </div>

        <p><button type="button" className="btn btn-primary" onClick={this.addNewInterestTier}>Add</button></p>
        <p><button type="button" className="btn btn-danger" onClick={this.deleteLastInterestTier}>Delete</button></p>
        
      </div>
    );
  }
};

export default InterestTiersForm;
