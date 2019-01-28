import React, { Component} from 'react';
import InterestTierInput from './InterestTierInput';

class InterestTiersForm extends Component {
  state = {
    interestTiers: ['tier0'],
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

  handleDeleteTier = id => {
    const { interestTiers } = this.state;
    const tierIndex = interestTiers.indexOf(`tier${id}`);

    interestTiers.splice(tierIndex, 1);

    this.setState({ ...this.state, interestTiers });
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
          {interestTiers.map(
            (tier, index) => (
              <InterestTierInput
                id={index}
                onChange={this.handleChange}
                onDelete={this.handleDeleteTier}
                key={`tier-input-${index}`}
              />
          ))}
        </div>

        <p><button type="button" className="btn btn-primary" onClick={this.addNewInterestTier}>Add</button></p>

      </div>
    );
  }
};

export default InterestTiersForm;
