import React, { Component } from 'react';

import InterestTierInput from './InterestTierInput';

class InterestTiersForm extends Component {

  state = {
    interestTiers: [
      { id: 0, interest: 2.50, debt: 101 }
    ]
  }

  handleInterestChange = ({ id, currentValues }) => {

    const { interestTiers } = this.state;
    interestTiers[id] = { ...interestTiers[id], ...currentValues };
    this.setState({ interestTiers });

    this.updateMainState();

  }

  handleAddTier = () => {
    
    const { interestTiers } = this.state;
    const updatedInterstTiers = [...interestTiers, { id: interestTiers.length, interest: 0, debt: 0 }];

    this.setState({interestTiers: updatedInterstTiers });
    this.updateMainState({interestTiers: updatedInterstTiers});

  }

  handleDeleteTier = id => {
    const { interestTiers } = this.state;

    if (interestTiers.length === 1) {
      return;
    }

    interestTiers.splice(id, 1);
    this.setState({ interestTiers });

  }

  updateMainState = ({interestTiers}) => {
    const {onChange} = this.props;
    onChange && onChange({interestTiers});
  } 

  render() {

    const { interestTiers } = this.state;
    const showDeleteButton = interestTiers.length > 1;

    return (

      <div style={{ marginTop: '20px' }}>
        {interestTiers.map(
        (tier, index) => (
          <InterestTierInput
            id={index}
            interest={tier.interest}
            debt={tier.debt}
            onChange={this.handleInterestChange}
            onDelete={this.handleDeleteTier}
            key={`tier-input-${index}`}
            showDeleteButton={showDeleteButton}
          />
        ))}

        <button style={{ width: "200px" }} type="button" onClick={this.handleAddTier}>Add tier</button>

      </div>
    );
  }
};

export default InterestTiersForm;
