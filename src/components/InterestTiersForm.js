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
    const showDeleteButton = interestTiers.length > 1;

    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-4">
              <label>Interest:</label>
            </div>
            <div className="col-4">
              <label>Debt Percentage:</label>
            </div>
          </div>

          {interestTiers.map(
            (tier, index) => (
              <InterestTierInput
                id={index}
                interest={tier.interest}
                debt={tier.debt}
                onChange={this.handleChange}
                onDelete={this.handleDeleteTier}
                key={`tier-input-${index}`}
                showDeleteButton={showDeleteButton}
              />
            ))}

            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col">
                <p><button type="button" className="btn btn-primary" onClick={this.handleAddNewInterestTier}>Add</button></p>
              </div>
            </div>

        </div>

      </div>
    );
  }
};

export default InterestTiersForm;
