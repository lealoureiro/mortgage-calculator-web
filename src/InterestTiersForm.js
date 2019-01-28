import React, { Component} from 'react';
import InterestTierInput from './InterestTierInput';

class InterestTiersForm extends Component {
  state = {
    inputValues: [],
  }

  handleAddNewInterestTier = () => {
    const { onAddTier } = this.props;

    onAddTier && onAddTier();
  }

  handleDeleteTier = id => {
    const { onDeleteTier } = this.props;

    onDeleteTier && onDeleteTier(id)
  }

  handleChange = (interestInputValues) => {
    const { onChange } = this.props;

    onChange && onChange(interestInputValues);
  }

  render() {
    const { interestTiers } = this.props;

    return (
      <div className="interestTiersForm">
        <h5>Interest Tiers:</h5>

        <div id="interest-tier-list">
          {interestTiers.map(
            (tier, index) => (
              <InterestTierInput
                id={index}
                interest={tier.interest}
                debt={tier.debt}
                onChange={this.handleChange}
                onDelete={this.handleDeleteTier}
                key={`tier-input-${index}`}
              />
          ))}
        </div>

        <p><button type="button" className="btn btn-primary" onClick={this.handleAddNewInterestTier}>Add</button></p>

      </div>
    );
  }
};

export default InterestTiersForm;
